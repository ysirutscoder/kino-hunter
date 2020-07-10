import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Movie } from "../shared/movie.model";
import { MoviesService } from "../shared/movies.service";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  selectedMovie: Movie;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    if (this.route.params["id"]) {
      this.route.params.subscribe(async (params: Params) => {
        this.selectedMovie = await this.moviesService.getMovie(+params["id"]);
        console.log(this.selectedMovie, params);
      });
    }
  }
}
