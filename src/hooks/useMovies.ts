"use client";

import { useSQLiteContext } from 'expo-sqlite';
import { deleteMovie, getMovie, getMovies, insertMovie } from '../services/database';
import { Movie } from '../types/movie';

export const useMovies = () => {
  const db = useSQLiteContext();

  const searchMovies = async (name: string): Promise<Movie[]> => {
    const results = await getMovies(db);
    // TODO: Add title include search
    return results;
  }

  const fetchMovies = async(): Promise<Movie[]> => {
    const results = await getMovies(db);
    return results;
  }

  const fetchMovie = async(id: number): Promise<Movie> => {
    const result = await getMovie(db, id);
    return result;
  }

  const addMovie = async(movie: Movie) => {
    const result = await insertMovie(db, movie);
    console.log(result)
    return result;
  }

  const removeMovie = async(id: number): Promise<boolean> => {
    const result = await deleteMovie(db, id);
    return result;
  }

  return {
    searchMovies,
    fetchMovies,
    fetchMovie,
    addMovie,
    removeMovie
  }
}
