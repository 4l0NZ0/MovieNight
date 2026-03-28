// used to test API

import { json } from "@sveltejs/kit";
import { getPopularMovies } from "../../../infrastructure/tmdbAPI";
import { TMDB_TOKEN } from "$env/static/private";

export async function GET() {
  //use GetPopular Movies funciton to fetch popular movies.
  //Function takes in an param of type token. Which is our TMDB token.
  //Returns popular movies.

  const movies = await getPopularMovies(TMDB_TOKEN);

  //Console log the first movie. For testing purposes.
  console.log(movies);
  return json(movies);
}
