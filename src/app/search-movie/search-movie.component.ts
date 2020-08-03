import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  HostListener,
} from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { MoviesService } from "../shared/movies.service";
import { Movie } from "../shared/movie.model";

@Component({
  selector: "app-search-movie",
  templateUrl: "./search-movie.component.html",
  styleUrls: ["./search-movie.component.scss"],
})
export class SearchMovieComponent implements OnInit {
  searchQuery: string = "";
  searchGenres;
  selectedMovie;
  filteredSearchGenres = [];
  selectedGenreId;
  movies: Movie[] = [];
  selected_id: number;
  genre_id: number;
  isLoadingOnScroll: boolean = false;

  @ViewChild("input") input: ElementRef;
  @ViewChild("result") result: ElementRef;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  async ngOnInit() {
    let interval = setInterval(() => {
      if (this.input !== undefined) {
        clearInterval(interval);
        this.input.nativeElement.focus();
      }
    }, 5);
    this.route.queryParams.subscribe(async (queryParams: Params) => {
      this.searchQuery = queryParams["q"];
      console.log(this.searchQuery)
      this.genre_id = queryParams["genre_id"];
      if (!this.searchQuery) {
        if (!this.movies.length) {
          if (!this.moviesService.getIsGenresMoviesLoaded())
            await this.moviesService.fetchMoviesGenre(
              this.genre_id,
              this.moviesService.getCurrentGenreMoviesPage(this.genre_id)
            );
        }
        this.movies = this.moviesService.getGenreMovies(this.genre_id);
      } else {
        setTimeout(async () => {
          await this.moviesService.fetchMoviesSearch(this.searchQuery);
          // this.searchGenres = this.moviesService.getSearchGenres();
          // this.searchGenres.forEach(genre => {
          //   if (genre.movies.length !== 0 ) this.filteredSearchGenres.push(genre)
          // })
          this.movies = this.moviesService.getSearchedMovies();
        }, 1500);
      }
    });

    if (!this.searchQuery && !this.genre_id)
      this.router.navigate([], { queryParams: { genre_id: 28 } });
  }

  getImgUrl(imgPath: string) {
    return this.moviesService.httpConfig.imgBaseUrl + imgPath;
  }

  handleTyping() {
    this.router.navigate([], {
      queryParams: { q: this.searchQuery },
      relativeTo: this.route,
      queryParamsHandling: "merge",
    });
  }

  returnBack() {
    this.router.navigate(["/list"], { relativeTo: this.route });
  }

  isShowDetails(id: number) {
    return this.selected_id == id;
  }

  handlePosterSelect(id: number) {
    if (this.selected_id === id) this.selected_id = null;
    else this.selected_id = id;
  }
  @HostListener("window:scroll", ["$event"])
  async handleScroll(event: any) {
    if (!this.isLoadingOnScroll) {
      let windowRelativeBottom = this.result.nativeElement.getBoundingClientRect()
        .bottom;
      if (windowRelativeBottom < document.documentElement.clientHeight + 50) {
        console.log("loading");
        this.isLoadingOnScroll = true;
        if (!this.searchQuery) {
          await this.moviesService.fetchMoviesGenre(this.genre_id);
          this.movies = this.moviesService.getGenreMovies(this.genre_id);
          this.isLoadingOnScroll = false;
        } else {
          await this.moviesService.fetchMoviesSearch(this.searchQuery);
          this.movies = this.moviesService.getSearchedMovies();
          this.isLoadingOnScroll = false;
        }
      }
    }
  }

  async handleImgClick(movie_id: number, genre_id: number) {
    this.selectedMovie = await this.moviesService.getMovie(movie_id);
    this.selectedGenreId = genre_id;
  }
}

