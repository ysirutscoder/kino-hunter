import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/movie.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MoviesService } from 'src/app/shared/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie;
  id: number;
  genre_id: number;
  expanded: boolean;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private moviesService: MoviesService) {

    this.genre_id = +this.route.snapshot.params['genre_id'];
    this.id = +this.route.snapshot.params['id'];
    this.movie = this.moviesService.getMovie(this.genre_id, this.id);
    this.route.params
      .subscribe((params: Params) => {
        this.genre_id = +params['genre_id']
        this.id = +params['id'];
        this.movie = this.moviesService.getMovie(this.genre_id, this.id);
        this.expanded = false;
      })
  }

  ngOnInit() {
  }

  getBgImgUrl() {
    return this.moviesService.httpConfig.imgBackgroundBaseUrl + this.movie.backdrop_path
  }

  getImgUrl() {
    return this.moviesService.httpConfig.imgBaseUrl + this.movie.poster_path
  }

  playMovie() {
    this.router.navigate(['/watch', this.genre_id, this.id], { relativeTo: this.route })
  }
}
