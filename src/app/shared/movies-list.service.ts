import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Movie } from "./movie.model";
import { MoviesService } from "./movies.service";
import { map, debounce, debounceTime } from "rxjs/operators";
import { Observable } from "rxjs";

export interface MoviesFetchReponse {
  page: number;
  results: Movie[];
}

@Injectable()
export class MoviesListService {
  page: number;
  movies: Movie[];

  constructor(private http: HttpClient, private moviesService: MoviesService) {
    this.page = 1;
    this.movies = [];
  }

  getMovies() {
    return this.movies.slice();
  }

  fetchMovies(): Observable<void> {
    const url = `${this.moviesService.httpConfig.baseUrl}/movie/popular?api_key=${this.moviesService.httpConfig.apiKey}&language=ru-RU&page=${this.page}`;
    return this.http.get(url, { responseType: "json" }).pipe(
      map((response: MoviesFetchReponse) => {
        const data = response.results;
        this.page = response.page + 1;
        const moviesArray: Movie[] = [];
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            moviesArray.push({
              id: data[key].id,
              original_title: data[key].original_title,
              title: data[key].title,
              overview: data[key].overview,
              release_date: data[key].release_date,
              poster_path: data[key].poster_path,
              backdrop_path: data[key].backdrop_path,
              imdb_id: data[key].imdb_id
            });
          }
        }
        this.movies.push(...moviesArray);
      })
    );
  }
}
