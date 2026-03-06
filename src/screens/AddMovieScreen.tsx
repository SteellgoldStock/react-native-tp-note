"use client";

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { ButtonCustom, InputCustom, ScreenWrapper } from "../components";
import { useMovies } from '../hooks/useMovies';
import { RootStackParamList } from "../navigation/StackNavigator";

type ScreenProps = NativeStackScreenProps<RootStackParamList, "Movies">

export const AddMovieScreen = ({ navigation }: ScreenProps) => {
  const { addMovie } = useMovies();

  const [title, setTitle] = useState<string>();
  const [realistor, setRealisator] = useState<string>();
  const [releaseYear, setReleaseYear] = useState<string>();
  const [type, setType] = useState<string>();
  const [note, setNote] = useState<string>();

  const createMovie = async() => {
    console.log(title, realistor, releaseYear, type, note)
    const result = await addMovie({
      title: title,
      real_names: realistor,
      release_year: Number(releaseYear),
      type: type,
      note: Number(note),
    });

    navigation.navigate("Movies", { reload: true })

    console.log(result);
  }

  return (
    <ScreenWrapper>
      <InputCustom type='text' onChangeText={setTitle} placeholder='Interstellar' value={title} />
      <InputCustom type='text' onChangeText={setRealisator} placeholder='Nolan, Spiellberg' value={realistor} />
      <InputCustom type='number' onChangeText={setReleaseYear} placeholder='2014' value={releaseYear} />
      <InputCustom type='text' onChangeText={setType} placeholder='Science-fiction, Guerre' value={type} />
      <InputCustom type='number' onChangeText={setNote} placeholder='4.5' value={note} />

      <ButtonCustom text="Valider" onPress={async() => createMovie()} />

    </ScreenWrapper>
  )
}
