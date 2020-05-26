import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MoviesService } from '../shared/movies.service';
import { Movie } from '../shared/movie.model';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {
  searchQuery: string = '';
  movies: Movie[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {

  }

  async ngOnInit() {
    // this.searchQuery = this.route.snapshot.queryParams['q']
    // await this.moviesService.fetchMoviesSearch(this.searchQuery)
    // this.movies = this.moviesService.getSearchedMovies();
    this.route.queryParams
      .subscribe(async (queryParams: Params) => {
        this.searchQuery = queryParams['q']
        await this.moviesService.fetchMoviesSearch(this.searchQuery)
        this.movies = this.moviesService.getSearchedMovies();
      })
  }

  getImgUrl(imgPath: string) {
    return this.moviesService.httpConfig.imgBaseUrl + imgPath;
  }

}
