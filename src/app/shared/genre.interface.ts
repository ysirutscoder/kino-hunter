import { Movie } from './movie.model';

export interface GenreInterface {
  id: number;
  name: string;
  page: number;
  movies: Movie[];
}
