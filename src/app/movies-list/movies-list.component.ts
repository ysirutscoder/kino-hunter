import { Component, OnInit, Input } from "@angular/core";
import { Movie } from "src/app/shared/movie.model";
import { MoviesService } from "src/app/shared/movies.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { MoviesListService } from '../shared/movies-list.service';
import { Observable } from 'rxjs';

@Component({
  selector: "app-movies-list",
  templateUrl: "./movies-list.component.html",
  styleUrls: ["./movies-list.component.scss"],
  providers: [MoviesListService]
})
export class MoviesListComponent implements OnInit {
  movies$: Observable<Movie[]>;
  selectedId: number;

  ngOnInit(): void {
    this.fetchMovies();
  }

  constructor(private moviesListService: MoviesListService, private moviesService: MoviesService) {

  }

  fetchMovies() {
    this.movies$ = this.moviesListService.fetchMovies();
  }

  getImgBaseUrl() {
    return this.moviesService.httpConfig.imgBaseUrl;
  }

  selectMovie(id: number) {
    this.selectedId = id;
    
  }
}
