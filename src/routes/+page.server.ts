import { fetchPopularMovies } from "../application/+fetchPopularMovie.server";
import { json } from "@sveltejs/kit";

export async function load() {
  const movies = await fetchPopularMovies();

  return {
    movies,
  };
}
