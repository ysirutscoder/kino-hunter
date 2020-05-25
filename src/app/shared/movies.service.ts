import { Movie } from './movie.model';

export class MoviesService {
    private movies: Movie[] = [];
    public httpConfig = {
        baseUrl: 'https://api.themoviedb.org/3',
        apiKey: '1fafe97d2ee12ba14e11814dc5afeaa2',
        language: 'ru-RU',
        imgBaseUrl: 'https://image.tmdb.org/t/p/w300/',
        imgBackgroundBaseUrl: 'https://image.tmdb.org/t/p/w1280/'
    }

    constructor() { }

    addMovie(movie: Movie) {
        this.movies.push(movie);
    }

    getMovie(id: number) {
        return this.movies.find(item => item.id == id)
    }

    getMovies() {
        return this.movies.slice();
    }

    async fetchMovies() {
        let url: string = `${this.httpConfig.baseUrl}/movie/popular?api_key=${this.httpConfig.apiKey}&language=${this.httpConfig.language}&page=1&region=RU`
        let response = await fetch(url, { method: "GET" })
        let films = await response.json();
        films.results.forEach(movie => {
            this.movies.push(new Movie(movie.id, movie.original_title, movie.title, movie.overview, movie.release_date, movie.poster_path, movie.backdrop_path))
        })
    }
}