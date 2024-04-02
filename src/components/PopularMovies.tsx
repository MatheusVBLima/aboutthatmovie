"use client";
import React, { useContext, useEffect } from "react";

import Image from "next/image";
import { MovieContext } from "@/context/ContextProvider";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Calendar } from "lucide-react";

export function PopularMovies() {
  const { getPopularMovies, popularMovies } = useContext(MovieContext);
  const imagesURL = process.env.NEXT_PUBLIC_IMG;

  useEffect(() => {
    getPopularMovies();
  }, []);

  return (
    <main className="flex w-full flex-col gap-10 px-2">
      <h1 className="text-center text-2xl font-semibold">Popular Movies</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {popularMovies.map((movie) => (
          <Card key={movie.id} className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-lg">{movie.title}</span>
                <span className="flex items-center gap-2">
                  <Calendar size={24} />
                  {movie.release_date}
                </span>
              </CardTitle>
              <CardDescription className="text-justify text-secondary-foreground">
                {movie.overview}
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto flex flex-1 items-end justify-center">
              <Image
                src={`${imagesURL}${movie.poster_path}`}
                alt={movie.title}
                width={300}
                height={200}
                className="rounded-lg "
              />
            </CardContent>
            <CardFooter className="mt-auto grid grid-cols-2 grid-rows-2 gap-2">
              <span className="col-span-2 text-center">
                original title: {movie.original_title}
              </span>
              <span className="text-center">
                vote average: {movie.vote_average}
              </span>
              <span className="text-center">
                original language: {movie.original_language}
              </span>
              <span className="text-center">
                release date: {movie.release_date}
              </span>
              <span className="text-center">
                vote count: {movie.vote_count}
              </span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
