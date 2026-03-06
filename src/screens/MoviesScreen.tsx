"use client";

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect, useLayoutEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ButtonCustom, HeaderTitle, ScreenWrapper } from "../components";
import { MovieButton } from '../components/MovieButton';
import { useMovies } from '../hooks/useMovies';
import { RootStackParamList } from "../navigation/StackNavigator";
import { Movie } from '../types/movie';

type ScreenProps = NativeStackScreenProps<RootStackParamList, "Movies">

export const MoviesScreen = ({ navigation, route }: ScreenProps) => {
  const { searchMovies, fetchMovies } = useMovies();
  const [movies, setMovies] = useState<Movie[]>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        onChangeText: async(event) => { // text.nativeEvent.text
          const dd = await searchMovies(event.nativeEvent.text);
          console.log("SEARCH: ", dd)
        }
      }
    })
  });

  useEffect(() => {
    const allMovies = async() => {
      const data = await fetchMovies();
      setMovies(data);
    }

    allMovies();
  }, [route.params.reload])

  return (
    <ScreenWrapper>
      <HeaderTitle text="Films" />

      <View style={styles.movieList}>
        {movies && movies.map((movie, id) => {
          return (
            <MovieButton
              text={movie.title}
              onPress={async() => navigation.navigate("Movie", {
                movieId: movie.id
                }
              )}
              key={movie.id}
            />
          )
        })}
      </View>

      <ButtonCustom
        text="Ajouter un film"
        onPress={async() => navigation.navigate("AddMovie")}
      />
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  movieList: {
    width: '100%',
    paddingVertical: 10
  }
})