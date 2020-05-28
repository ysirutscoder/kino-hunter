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
  genre_id: number;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
  ) { }

  async ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id']
        this.movie = this.moviesService.getSearchedMovie(this.id)

      })
    this.route.queryParams
      .subscribe((params: Params) => {
        this.genre_id = params['genre_id']
      })
    if (this.genre_id)
      this.movie = await this.moviesService.getMovie(this.id, 'genre')
    else 
      this.movie = await this.moviesService.getMovie(this.id, 'search')
  }

}
