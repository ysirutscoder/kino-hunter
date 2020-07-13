import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  HostListener,
  OnDestroy,
  Output,
  EventEmitter,
} from "@angular/core";
import { Movie } from "src/app/shared/movie.model";
import { MoviesService } from "src/app/shared/movies.service";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-movies-list",
  templateUrl: "./movies-list.component.html",
  styleUrls: ["./movies-list.component.scss"],
})
export class MoviesListComponent implements OnInit {
  private moviesGenres: { id: number; name: string; movies: Movie[] }[] = [];
  private isSearchOpened: boolean = false;
  isFetchingOnScroll: boolean = false;
  searchInputValue: string;
  isPageLoaded: boolean = false;
  selectedMovie: Movie;
  selectedGenreId: number;

  @ViewChild("searcher") searcher: ElementRef;
  @ViewChild("searchBtn") searchBtn: ElementRef;
  @ViewChild("headerElement") headerElement: ElementRef;

  constructor(
    private moviesService: MoviesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    if (!this.moviesService.getIsGenresMoviesLoaded()) {
      this.moviesService.fetchMovies();
    }
    this.moviesGenres = this.moviesService.getMovies();
    let interval = setInterval(() => {
      if (this.moviesGenres.length !== 0) {
        clearInterval(interval);
        let randomMovie = this.moviesGenres[0].movies[
          Math.ceil(Math.random() * 20)
        ];
        this.router.navigate([randomMovie.id], { relativeTo: this.route });
        this.selectedGenreId = this.moviesGenres[0].id;
        this.selectedMovie = randomMovie;
        this.isPageLoaded = true;
      }
    }, 200);
    setTimeout(() => {
      if (!this.isPageLoaded) {
        this.ngOnInit();
      }
    }, 1000);
  }

  getImgUrl(imgPath: string) {
    return this.moviesService.httpConfig.imgBaseUrl + imgPath;
  }

  handleSearchClick() {
    if (this.isSearchOpened == false) {
      this.isSearchOpened = !this.isSearchOpened;
      this.searcher.nativeElement.focus();
    } else {
      if (this.searchInputValue.length > 0) {
        this.router.navigate(["/search"], {
          queryParams: { q: this.searchInputValue },
          relativeTo: this.route,
        });
      }
    }
  }

  handleEntering(e: any) {
    if (e.keyCode === 13) this.handleSearchClick();
  }

  onRowScroll(event: any) {
    let genreId = event.target.id.slice(9);
    let scrollOffset =
      event.target.scrollWidth -
      event.target.clientWidth -
      event.target.scrollLeft;
    if (scrollOffset < 100 && !this.isFetchingOnScroll) {
      this.isFetchingOnScroll = true;
      this.moviesService.fetchMoviesGenre(genreId);
      this.moviesGenres = this.moviesService.getMovies();
      setTimeout(() => {
        this.isFetchingOnScroll = false;
      }, 1000);
    }
  }

  // @HostListener("window:scroll")
  // onScrollHeaderControl() {
  //   if (
  //     document.documentElement.getBoundingClientRect().top +
  //       document.documentElement.getBoundingClientRect().height <=
  //     100
  //   ) {
  //     this.headerElement.nativeElement.classList.add(
  //       "movies-list__header--shown"
  //     );
  //   } else {
  //     this.headerElement.nativeElement.classList.remove(
  //       "movies-list__header--shown"
  //     );
  //   }
  // }

  getIsSearchOpened() {
    return this.isSearchOpened;
  }

  getMoviesGenres() {
    return this.moviesGenres;
  }

  async handleImgClick(movie_id: number, genre_id: number) {
    this.selectedMovie = await this.moviesService.getMovie(movie_id);
    this.selectedGenreId = genre_id;
  }

  playMovie() {
    this.router.navigate(["/watch", this.selectedMovie.id], {
      relativeTo: this.route,
    });
  }

  handleArrowsClick(type: string, genre_id: number) {
    const row = document.getElementById("genre-id-" + genre_id);
    row.scroll({
      behavior: "smooth",
      left:
        type == "next"
          ? row.scrollLeft + (row.getBoundingClientRect().width * 3) / 4
          : row.scrollLeft - (row.getBoundingClientRect().width * 3) / 4,
    });
  }
}
