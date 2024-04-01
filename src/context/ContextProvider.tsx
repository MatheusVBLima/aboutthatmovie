"use client";
import React, { ReactNode, createContext, useState } from "react";
import { api } from "../services/api";

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface ContextProps {
  getPopularMovies(): Promise<Movie[]>;
  getTopRatedMovies(): Promise<Movie[]>;
  topRatedMovies: Movie[];
  popularMovies: Movie[];
}

type MovieProviderProps = {
  children: ReactNode;
};

export const MovieContext = createContext({} as ContextProps);

export function MovieProvider({ children }: MovieProviderProps) {
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);

  async function getTopRatedMovies() {
    const response = await api.get("/movie/top_rated?language=pt-BR");
    const data = response.data.results;
    setTopRatedMovies(data);
    return data;
  }

  async function getPopularMovies() {
    const response = await api.get("/movie/popular?language=pt-BR");
    const data = response.data.results;
    setPopularMovies(data);
    return data;
  }

  return (
    <MovieContext.Provider
      value={{
        getPopularMovies,
        getTopRatedMovies,
        topRatedMovies,
        popularMovies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
