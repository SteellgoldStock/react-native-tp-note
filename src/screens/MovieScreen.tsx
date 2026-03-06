"use client";

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { ButtonCustom, HeaderTitle, ScreenWrapper } from "../components";
import { useMovies } from '../hooks/useMovies';
import { RootStackParamList } from "../navigation/StackNavigator";
import { Movie } from '../types/movie';

type ScreenProps = NativeStackScreenProps<RootStackParamList, "Movie">

export const MovieScreen = ({ navigation, route }: ScreenProps) => {
  const { fetchMovie, removeMovie } = useMovies();
  const [movie, setMovie] = useState<Movie | null>();

  useEffect(() => {
    const searchMovie = async(id: number) => {
      const data = await fetchMovie(route.params.movieId);
      setMovie(data)
    }

    searchMovie(route.params.movieId);
  }, [route.params.movieId]);

  const deleteMovie = async() => {
    const result = await removeMovie(movie.id);
    if (result) {
      Alert.alert("Erreur", "La suppressio à eu un problème ")
      return;
    }
    
    console.log("Supprimé")
    navigation.navigate("Movies", { reload: true })
  }

  if (!movie) {
    return (
      <ScreenWrapper>
        <HeaderTitle text="Ce film n'existe pas" />
      </ScreenWrapper>
    )
  }

  return (
    <ScreenWrapper>
      <View style={styles.card}>
        <HeaderTitle text={movie.title} />
        <View>
          <HeaderTitle text={"Note: " + movie.note + "/5"} />
        </View>

      <Text style={styles.between}>Note: <Text>{movie.note}</Text></Text>
      <Text style={styles.between}>Réalisateur(s): <Text>{movie.real_names}</Text></Text>
      <Text style={styles.between}>Année de sortie <Text>{movie.release_year}</Text></Text>
      <Text style={styles.between}>Genre: <Text>{movie.type}</Text></Text>
      </View>

      <ButtonCustom
        text="Supprimer ce film"
        onPress={async() => {
          console.log("12344")
          const r = Alert.alert("Êtes vous sûr ?", "Vous voulez vraiment supprimer ce super film?", [
            {
              isPreferred: true,
              onPress: async() => await deleteMovie(),
              text: "Oui",
              style: "destructive"
            },
            { text: "Ouais, nan" }
          ]);
        }}
      />
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 10
  },
  between: {
    justifyContent: "space-between"
  }
})