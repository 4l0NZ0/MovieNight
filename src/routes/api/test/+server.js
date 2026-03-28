// used to test API

import { json } from "@sveltejs/kit";
import { getPopularMovies } from "../../../infrastructure/tmdbAPI";
import { TMDB_TOKEN } from "$env/static/private";

export async function GET() {
  const movies = await getPopularMovies(TMDB_TOKEN);
  console.log(movies);
  return json(movies);
}
