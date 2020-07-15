import { Component, OnInit, Input } from "@angular/core";
import { Movie } from "src/app/shared/movie.model";
import { MoviesService } from "src/app/shared/movies.service";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-movies-list",
  templateUrl: "./movies-list.component.html",
  styleUrls: ["./movies-list.component.scss"],
})
export class MoviesListComponent implements OnInit {
 @Input('moviesList') moviesProps: Movie[];

  ngOnInit(): void {
  }
}
