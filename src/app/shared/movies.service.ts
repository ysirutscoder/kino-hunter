import { Movie } from "./movie.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { GenreInterface } from './genres.interface';

@Injectable()
export class MoviesService {
  private moviesGenres: GenreInterface[] = [
    {
      id: 28,
      name: "Боевики",
      page: 1,
      movies: [],
    },
    {
      id: 12,
      name: "Приключения",
      page: 1,
      movies: [],
    },
    {
      id: 16,
      name: "Мультфильмы",
      page: 1,
      movies: [],
    },
    {
      id: 35,
      name: "Комедии",
      page: 1,
      movies: [],
    },
    {
      id: 80,
      name: "Криминальные",
      page: 1,
      movies: [],
    },
    {
      id: 99,
      name: "Документальные фильмы",
      page: 1,
      movies: [],
    },
    {
      id: 18,
      name: "Драмы",
      page: 1,
      movies: [],
    },
    {
      id: 10751,
      name: "Семейные",
      page: 1,
      movies: [],
    },
    {
      id: 14,
      name: "Фантастика",
      page: 1,
      movies: [],
    },
    {
      id: 36,
      name: "Исторические",
      page: 1,
      movies: [],
    },
    {
      id: 27,
      name: "Ужасы",
      page: 1,
      movies: [],
    },
    {
      id: 10402,
      name: "Мюзиклы",
      page: 1,
      movies: [],
    },
    {
      id: 9648,
      name: "Детективы",
      page: 1,
      movies: [],
    },
    {
      id: 10749,
      name: "Романтические",
      page: 1,
      movies: [],
    },
    {
      id: 878,
      name: "Научная фантастика",
      page: 1,
      movies: [],
    },
    {
      id: 10770,
      name: "Сериалы",
      page: 1,
      movies: [],
    },
    {
      id: 53,
      name: "Триллеры",
      page: 1,
      movies: [],
    },
    {
      id: 10752,
      name: "Военные",
      page: 1,
      movies: [],
    },
    {
      id: 37,
      name: "Вэстерн",
      page: 1,
      movies: [],
    },
  ];
  private searchGenres = this.moviesGenres;
  private searchResultMovies: Movie[] = [];
  private isGenresMoviesLoaded: boolean = false;
  public httpConfig = {
    baseUrl: "https://api.themoviedb.org/3",
    apiKey: "1fafe97d2ee12ba14e11814dc5afeaa2",
    language: "ru-RU",
    imgBaseUrl: "https://image.tmdb.org/t/p/w300/",
    imgBackgroundBaseUrl: "https://image.tmdb.org/t/p/w1280/",
  };

  constructor(private http: HttpClient) {}

  getCurrentGenreMoviesPage(genre_id: number) {
    return this.moviesGenres.find((genre) => {
      return genre.id == genre_id;
    }).page;
  }

  getIsGenresMoviesLoaded() {
    return this.isGenresMoviesLoaded;
  }

  getMovie(
    id: number,
    finding_area?: string,
    media_type?: string,
    genre_id?: number
  ) {
    if (finding_area == "search") {
      return this.searchResultMovies.find((movie) => {
        return movie.id == id;
      });
    } else if (finding_area == "genres") {
      let selectedMovie: Movie;
      if (genre_id)
        return this.moviesGenres[genre_id].movies.find((movie) => {
          if (movie.id == id) {
            selectedMovie = movie;
            return true;
          }
        });
      else {
        this.moviesGenres.filter((genre) => {
          return genre.movies.find((movie) => {
            if (movie.id == id) {
              selectedMovie = movie;
              return true;
            }
            return false;
          });
        });
      }

      return selectedMovie ? selectedMovie : this.getSearchedMovie(id);
    } else {
      return this.fetchMovie(id, media_type);
    }
  }

  getMovies() {
    return this.moviesGenres.slice();
  }

  getGenreMovies(genre_id: number) {
    return this.moviesGenres
      .find((genre) => {
        return genre.id == genre_id;
      })
      .movies.slice();
  }

  getSearchGenres() {
    return this.searchGenres.slice();
  }

  getSearchedMovies() {
    return this.searchResultMovies.slice();
  }

  getSearchedMovie(id: number) {
    return this.searchResultMovies.find((movie) => {
      return movie.id == id;
    });
  }

  fetchMovies() {
    this.moviesGenres.forEach(async (genre) => {
      let url: string = `${this.httpConfig.baseUrl}/discover/movie?api_key=${this.httpConfig.apiKey}&language=${this.httpConfig.language}&page=1&region=RU&with_genres=${genre.id}`;
      let response = await fetch(url, { method: "GET" });
      let films = await response.json();
      films.results.forEach((movie) => {
        if (movie.poster_path)
          genre.movies.push(
            new Movie(
              movie.id,
              movie.original_title,
              movie.title,
              movie.overview,
              movie.release_date,
              movie.poster_path,
              movie.backdrop_path,
              movie.media_type,
              movie.imdb_id
            )
          );
      });
      if (films) this.isGenresMoviesLoaded = true;
    });
  }

  async fetchMoviesGenre(genreId: number, page?: number) {
    let genre = this.moviesGenres.find((item) => {
      return item.id == genreId;
    });
    if (page) genre.page++;
    let url: string = `${this.httpConfig.baseUrl}/discover/movie?api_key=${
      this.httpConfig.apiKey
    }&language=${this.httpConfig.language}&page=${
      page ? page : ++genre.page
    }&region=RU&with_genres=${genreId}`;
    let response = await fetch(url, { method: "GET" });
    let films = await response.json();
    films.results.forEach((movie) => {
      if (movie.poster_path)
        genre.movies.push(
          new Movie(
            movie.id,
            movie.original_title,
            movie.title || movie.name,
            movie.overview,
            movie.release_date || movie.first_air_date,
            movie.poster_path,
            movie.backdrop_path,
            movie.media_type,
            movie.imdb_id
          )
        );
    });
  }

  async fetchMoviesSearch(searchQuery: string) {
    let url: string = `${this.httpConfig.baseUrl}/search/multi?api_key=${this.httpConfig.apiKey}&language=${this.httpConfig.language}&query=${searchQuery}&page=1&include_adult=false`;
    let response = await fetch(url, { method: "GET" });
    let films = await response.json();
    this.searchResultMovies.length = 0;
    this.searchGenres.forEach((genre) => {
      genre.movies.length = 0;
    });
    films.results.forEach((movie) => {
      const filmToPush = new Movie(
        movie.id,
        movie.original_title,
        movie.title || movie.name,
        movie.overview,
        movie.release_date || movie.first_air_date,
        movie.poster_path,
        movie.backdrop_path,
        movie.media_type,
        movie.imdb_id,
        movie.genre_ids[0] ? movie.genre_ids[0] : 0
      );
      if (movie.poster_path) {
        this.searchResultMovies.push(filmToPush);
        this.searchGenres[
          this.searchGenres.findIndex(
            (element) => element.id == movie.genre_ids[0]
          )
        ].movies.push(filmToPush);
      }
    });
  }

  async fetchMovie(id: number, mediaType?: string) {
    let film: Movie;
    let url: string = `${this.httpConfig.baseUrl}/${
      mediaType ? mediaType : "movie"
    }/${id}?api_key=${this.httpConfig.apiKey}&language=${
      this.httpConfig.language
    }`;
    let response = await fetch(url, { method: "GET" });
    let movie = await response.json();
    film = new Movie(
      movie.id,
      movie.original_title,
      movie.title || movie.name,
      movie.overview,
      movie.release_date || movie.first_air_date,
      movie.poster_path,
      movie.backdrop_path,
      movie.media_type,
      movie.imdb_id
    );

    return film;
  }

  httpFetchMovie(): Observable<Movie[]> {
    const url = `${this.httpConfig.baseUrl}/${
      mediaType ? mediaType : "movie"
    }/${id}?api_key=${this.httpConfig.apiKey}&language=${
      this.httpConfig.language
    }`;
    return this.http.get();
  }
}
