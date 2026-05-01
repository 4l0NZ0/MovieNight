// Calls TMDB API
import type { Movie } from "../domian/movie";
import { TMDB_TOKEN } from "$env/static/private";

const TMDB_BASE = "https://api.themoviedb.org/3";

//make request
export async function getPopularMovies(): Promise<Movie[]> {
  const res = await fetch(`${TMDB_BASE}/movie/popular`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${TMDB_TOKEN}`,
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

  const movie: Movie[] = data.results.map(
    (item: {
      id: number;
      title: string;
      vote_average: number;
      overview: string;
      genre_ids: [number];
      poster_path: string;
      backdrop_path: string;
    }) => {
      return {
        id: item.id,
        title: item.title,
        vote_average: item.vote_average,
        overview: item.overview,
        genres: item.genre_ids,
        posterPath: item.poster_path,
        backdrop_path: item.backdrop_path,
      };
    },
  );

  //console.log(movie);
  return movie;
}
