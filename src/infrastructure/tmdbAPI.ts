// Calls TMDB API
import type { Movie } from "../domian/movie";

const TMDB_BASE = "https://api.themoviedb.org/3";

//make request
export async function getPopularMovies(token: string): Promise<Movie[]> {
  const res = await fetch(`${TMDB_BASE}/movie/popular`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  //if we have an error. We throw the error.
  if (!res.ok) {
    throw new Error(
      `TMDB request failed. Please try again. status ${res.status}`,
    );
  }

  const data = await res.json();
  console.log(data);
  return data.results;
}
