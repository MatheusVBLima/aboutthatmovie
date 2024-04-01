import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWZkNWQyYzY3YThkZTYyODIzNzNmZTdmNmQ2MWQxNyIsInN1YiI6IjY1ZmYxMjI0MzUyMGU4MDE3ZWQ3Y2FmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KHSkaxflnxCYZbZorKU_CgFBhORzOaa7o7JYwOr95IE",
  },
});
