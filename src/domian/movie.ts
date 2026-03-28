//Movie entitity
export interface Movie {
  id: number;
  title: string;
  vote_average: number;
  overview: string;
  genres: [number];
  posterPath: string;
}
