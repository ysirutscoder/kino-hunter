import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/movie.model';
import { MoviesService } from 'src/app/shared/movies.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-movie-short-details',
  templateUrl: './movie-short-details.component.html',
  styleUrls: ['./movie-short-details.component.scss']
})
export class MovieShortDetailsComponent implements OnInit {
  movie: Movie;
  id: number;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.movie = this.moviesService.getSearchedMovie(this.id)
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id']
        this.movie = this.moviesService.getSearchedMovie(this.id)

      })
  }

}
