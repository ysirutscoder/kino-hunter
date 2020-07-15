import { Component, OnInit } from "@angular/core";
import { GenreInterface } from "../shared/genres.interface";
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
    console.log(1)
    this.genres = this.moviesService.getGenres();
    console.log(this.moviesService.getGenres())
  }
}
