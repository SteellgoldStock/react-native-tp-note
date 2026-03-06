"use client";

import { PropsWithChildren, useEffect } from 'react';
import { useMovies } from '../hooks/useMovies';

export const Providers = ({ children }: PropsWithChildren) => {
  const { fetchMovies } = useMovies();

  useEffect(() => {
    const loadMovies = async() => {
      await fetchMovies();
    }

    loadMovies();
  }, [])

  return (
    <>{children}</>
  )
}
