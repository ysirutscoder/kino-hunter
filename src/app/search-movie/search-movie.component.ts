import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
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
  selected_id: number;

  @ViewChild('input', { static: false }) input: ElementRef;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {

  }

  async ngOnInit() {
    let interval = setInterval(() => {
      if (this.input !== undefined) {
        clearInterval(interval)
        this.input.nativeElement.focus();
      }
    }, 5)
    this.route.queryParams
      .subscribe(async (queryParams: Params) => {
        this.searchQuery = queryParams['q']
        setTimeout(async () => {
          await this.moviesService.fetchMoviesSearch(this.searchQuery)
          this.movies = this.moviesService.getSearchedMovies();
        }, 500)
      })
  }

  getImgUrl(imgPath: string) {
    return this.moviesService.httpConfig.imgBaseUrl + imgPath;
  }

  handleTyping() {
    // if (this.searchQuery.length == 0) {

    //   this.movies = this.moviesService.getMovies[0].movies;

    // } else {

    this.router.navigate([], { queryParams: { q: this.searchQuery }, relativeTo: this.route, queryParamsHandling: "merge" })
    // }
  }

  returnBack() {
    this.router.navigate(['/list/299536'], { relativeTo: this.route })
  }

  isShowDetails(id: number) {
    return this.selected_id == id
  }

  handlePosterSelect(id: number) {
    this.selected_id = id;
  }
}
