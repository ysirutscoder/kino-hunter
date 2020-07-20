import { Component, OnInit } from "@angular/core";
import { GenreInterface } from "../shared/genre.interface";
import { MoviesService } from '../shared/movies.service';

@Component({
  selector: "app-genres-list",
  templateUrl: "./genres-list.component.html",
  styleUrls: ["./genres-list.component.scss"],
})
export class GenresListComponent implements OnInit {
  genres: GenreInterface[];

  constructor(
    private moviesService: MoviesService
  ) {
  }

  ngOnInit(): void {
    
    this.genres = this.moviesService.getGenres();
  }
}
