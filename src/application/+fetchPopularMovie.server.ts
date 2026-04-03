//Logic to get recommendations

import { json } from "@sveltejs/kit";
import { getPopularMovies } from "../infrastructure/+tmdbAPI.server";

export async function fetchPopularMovies() {
  //use GetPopular Movies funciton to fetch popular movies.
  //Function takes in an param of type token. Which is our TMDB token.
  //Returns popular movies.
  return await getPopularMovies();
}
