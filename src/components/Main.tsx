"use client";
import React, { useContext } from "react";
import { Button } from "./ui/button";
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

export default function Main() {
  const { getTopRatedMovies, topRatedMovies } = useContext(MovieContext);
  const imagesURL = process.env.NEXT_PUBLIC_IMG;
  console.log(topRatedMovies);
  return (
    <main className="flex w-full flex-col px-2">
      <Button onClick={getTopRatedMovies}>Get Top Rated Movies</Button>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {topRatedMovies.map((movie) => (
          <Card key={movie.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>
                {movie.title} - {movie.release_date}
              </CardTitle>
              <CardDescription className="text-secondary-foreground">
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
