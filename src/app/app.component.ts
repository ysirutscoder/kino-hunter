import { Component } from '@angular/core';
import { MoviesService } from './shared/movies.service';
import { Movie } from './shared/movie.model';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [MoviesService],
})
export class AppComponent {
  selectedMovie: Movie;

  handleMovieSelect(movie: Movie) {
    console.log(1)
    this.selectedMovie = movie;
  }
}
