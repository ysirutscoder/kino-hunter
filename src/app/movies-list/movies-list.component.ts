import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from "@angular/core";
import { Movie } from "src/app/shared/movie.model";
import { MoviesService } from "src/app/shared/movies.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { MoviesListService } from "../shared/movies-list.service";
import { Observable } from "rxjs";
import { Element } from "@angular/compiler";
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: "app-movies-list",
  templateUrl: "./movies-list.component.html",
  styleUrls: ["./movies-list.component.scss", "../../styles/_mixins.scss"],
  providers: [MoviesListService],
})
export class MoviesListComponent implements OnInit {
  movies: Movie[];
  selectedMovie: Movie;
  selectedRowIndex: number;
  moviesRows: Movie[][];
  selectedId: number;
  numberInRow: number;
  rowsNumber: number;
  dataStream$;

  @ViewChild("details") detailsElRef: ElementRef;

  ngOnInit(): void {

    if (document.body.clientWidth <= 564) this.numberInRow = 4;
    else if (document.body.clientWidth <= 768) this.numberInRow = 5;
    else if (document.body.clientWidth <= 992) this.numberInRow = 6;
    else if (document.body.clientWidth <= 1200) this.numberInRow = 8;
    else this.numberInRow = 9;
    this.dataStream$ = new Observable((subscriber) => {
      this.moviesListService.fetchMovies().subscribe(() => {
        this.movies = this.moviesListService.getMovies();
        this.rowsNumber = Math.ceil(this.movies.length / this.numberInRow);
        this.moviesRows.length = 0;
        for (let i = 0; i < this.rowsNumber; i++) {
          this.moviesRows.push(
            this.movies.slice(i * this.numberInRow, (i + 1) * this.numberInRow)
          );
        }
        subscriber.next();
      });
    })
    this.dataStream$.pipe(debounceTime(500));
    this.fetchMovies();
  }

  constructor(
    private moviesListService: MoviesListService,
    private moviesService: MoviesService
  ) {
    this.moviesRows = [];
  }

  fetchMovies() {
    // this.moviesListService.fetchMovies().subscribe(() => {
    //   this.movies = this.moviesListService.getMovies();
    //   this.rowsNumber = Math.ceil(this.movies.length / this.numberInRow);
    //   this.moviesRows.length = 0;
    //   for (let i = 0; i < this.rowsNumber; i++) {
    //     this.moviesRows.push(
    //       this.movies.slice(i * this.numberInRow, (i + 1) * this.numberInRow)
    //     );
    //   }
    // });
    this.dataStream$.subscribe()
  }

  getImgBaseUrl() {
    return this.moviesService.httpConfig.imgBaseUrl;
  }

  selectMovie(movie: Movie, rowIndex: number) {
    this.selectedMovie = movie;
    this.selectedRowIndex = rowIndex;
  }
}
