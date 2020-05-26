import { Movie } from './movie.model';

export class MoviesService {
    private moviesGenres: { id: number, name: string, movies: Movie[] }[] = [

        {
            "id": 28,
            "name": "Боевики",
            "movies": []
        },
        {
            "id": 12,
            "name": "Приключения",
            "movies": []
        },
        {
            "id": 16,
            "name": "Мультфильмы",
            "movies": []
        },
        {
            "id": 35,
            "name": "Комедии",
            "movies": [],
        },
        {
            "id": 80,
            "name": "Триллеры",
            "movies": []
        },
        {
            "id": 99,
            "name": "Документальные фильмы",
            "movies": []
        },
        {
            "id": 18,
            "name": "Драма",
            "movies": []
        },
        {
            "id": 10751,
            "name": "Семейные",
            "movies": []
        },
        {
            "id": 14,
            "name": "Фантастика",
            "movies": []
        },
        {
            "id": 36,
            "name": "Исторические",
            "movies": []
        },
        {
            "id": 27,
            "name": "Ужастики",
            "movies": []
        },
        {
            "id": 10402,
            "name": "Мюзиклы",
            "movies": []
        },
        {
            "id": 9648,
            "name": "Детективы",
            "movies": []
        },
        {
            "id": 10749,
            "name": "Романтические",
            "movies": []
        },
        {
            "id": 878,
            "name": "Научно-популярные",
            "movies": []
        },
        {
            "id": 10770,
            "name": "ТВ шоу",
            "movies": []
        },
        {
            "id": 53,
            "name": "Триллеры",
            "movies": []
        },
        {
            "id": 10752,
            "name": "Военные",
            "movies": []
        },
        {
            "id": 37,
            "name": "Вэстерн",
            "movies": []
        }

    ];
    private searchResultMovies: Movie[] = [];
    public httpConfig = {
        baseUrl: 'https://api.themoviedb.org/3',
        apiKey: '1fafe97d2ee12ba14e11814dc5afeaa2',
        language: 'ru-RU',
        imgBaseUrl: 'https://image.tmdb.org/t/p/w300/',
        imgBackgroundBaseUrl: 'https://image.tmdb.org/t/p/w1280/'
    }

    constructor() { }

    getMovie(genreId: number, id: number) {
        return this.moviesGenres.find(genre => {
            return genre.id == genreId
        }).movies.find(movie => {
            return movie.id == id;
        })
    }

    getMovies() {
        return this.moviesGenres.slice();
    }

    getSearchedMovies() {
        return this.searchResultMovies.slice();
    }

    fetchMovies() {
        this.moviesGenres.forEach(async genre => {
            let url: string = `${this.httpConfig.baseUrl}/discover/movie?api_key=${this.httpConfig.apiKey}&language=${this.httpConfig.language}&page=1&region=RU&with_genres=${genre.id}`;
            let response = await fetch(url, { method: "GET" });
            let films = await response.json();
            films.results.forEach(movie => {
                genre.movies.push(new Movie(movie.id, movie.original_title, movie.title, movie.overview, movie.release_date, movie.poster_path, movie.backdrop_path))
            })
        })
    }

    async fetchMoviesSearch(searchQuery: string) {
        let url: string = `${this.httpConfig.baseUrl}/search/multi?api_key=${this.httpConfig.apiKey}&language=${this.httpConfig.language}&query=${searchQuery}&page=1&include_adult=false`;
        let response = await fetch(url, { method: "GET" })
        let films = await response.json();
        this.searchResultMovies.length = 0
        films.results.forEach(movie => {
            this.searchResultMovies.push(new Movie(movie.id, movie.original_title, movie.title, movie.overview, movie.release_date, movie.poster_path, movie.backdrop_path))
        })
        console.log(this.searchResultMovies);
    }
}