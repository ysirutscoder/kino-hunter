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
import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Subscription, Observable } from "rxjs";

@Component({
  selector: "app-search-movie",
  templateUrl: "./search-movie.component.html",
  styleUrls: ["./search-movie.component.scss"],
})
export class SearchMovieComponent implements OnInit {
  searchQuery: string = "";
  movies: Movie[] = [];
  selected_id: number;
  genre_id: number;
  isLoadingOnScroll: boolean = false;
  // dataSource: MoviesDataSource;

  @ViewChild("input") input: ElementRef;

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
          this.movies = this.moviesService.getSearchedMovies();
        }, 1000);
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
  // @HostListener('window:scroll', ['$event'])
  // async handleScroll(event: any) {

  //   console.log(document.documentElement.getBoundingClientRect().y, document.documentElement.clientHeight)
  //   if (!this.isLoadingOnScroll) {
  //     let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
  //     if (windowRelativeBottom < document.documentElement.clientHeight + 50) {
  //       console.log("loading")
  //       this.isLoadingOnScroll = true;
  //       if (!this.searchQuery) {
  //         await this.moviesService.fetchMoviesGenre(this.genre_id)
  //         this.movies = this.moviesService.getGenreMovies(this.genre_id)
  //         // this.isLoadingOnScroll = false;

  //       }

  //       // else {
  //       //     await this.moviesService.fetchMoviesSearch(this.searchQuery)
  //       //     this.movies = this.moviesService.getSearchedMovies();
  //       // }
  //       // await this.moviesService.fetchMoviesGenre(this.genre_id, this.moviesService.getCurrentGenreMoviesPage(this.genre_id))
  //       // this.isLoadingOnScroll = false;
  //     }
  //   }

  // }
}

// export class MoviesDataSource extends DataSource<Movie | undefined> {
//   private cachedMovies = Array.from<Movie>({ length: 0 });
//   private dataStream = new BehaviorSubject<(Movie | undefined)[]>(this.cachedMovies);
//   private subscription = new Subscription();

//   private pageSize = 10;
//   private lastPage = 0;

//   constructor(private moviesService: MoviesService) {
//     super();

//     // Start with some data.
//     // this._fetchFactPage();
//   }

//   connect(collectionViewer: CollectionViewer): Observable<(Movie | undefined)[] | ReadonlyArray<Movie | undefined>> {
//     this.subscription.add(collectionViewer.viewChange.subscribe(range => {

//       const currentPage = this._getPageForIndex(range.end);

//       if (currentPage && range) {
//         console.log(currentPage, this.lastPage);
//       }

//       if (currentPage > this.lastPage) {
//         this.lastPage = currentPage;
//         // this._fetchFactPage();
//       }
//     }));
//     return this.dataStream;
//   }

//   disconnect(collectionViewer: CollectionViewer): void {
//     this.subscription.unsubscribe();
//   }

//   private _fetchFactPage(): void {
//     for (let i = 0; i < this.pageSize; ++i) {

//       this.moviesService.getRandomFact().subscribe(res => {
//         this.cachedMovies = this.cachedMovies.concat(res);
//         this.dataStream.next(this.cachedMovies);
//       });
//     }
//   }

//   private _getPageForIndex(i: number): number {
//     return Math.floor(i / this.pageSize);
//   }

// }
