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
  genre_id: number;

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
        this.genre_id = queryParams['genre_id']
        if (!this.searchQuery) {
          if (!this.movies.length) {
            if (!this.moviesService.getIsGenresMoviesLoaded())
              await this.moviesService.fetchMoviesGenre(this.genre_id, this.moviesService.getCurrentGenreMoviesPage(this.genre_id))
          }
          this.movies = this.moviesService.getGenreMovies(this.genre_id)
        }

        else {
          setTimeout(async () => {
            await this.moviesService.fetchMoviesSearch(this.searchQuery)
            this.movies = this.moviesService.getSearchedMovies();
          }, 1000)
        }
      })

    if (!this.searchQuery && !this.genre_id) this.router.navigate([], { queryParams: { genre_id: 28 } })
  }

  getImgUrl(imgPath: string) {
    return this.moviesService.httpConfig.imgBaseUrl + imgPath;
  }

  handleTyping() {
    this.router.navigate([], { queryParams: { q: this.searchQuery }, relativeTo: this.route, queryParamsHandling: "merge" })
  }

  returnBack() {
    this.router.navigate(['/list'], { relativeTo: this.route })
  }

  isShowDetails(id: number) {
    return this.selected_id == id
  }

  handlePosterSelect(id: number) {
    this.selected_id = id;
  }

  handleScroll(event: any) {
    console.log('im in')
    console.log(event.target)
  }
}
