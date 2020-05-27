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
  expanded: boolean;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private moviesService: MoviesService) {

    this.id = +this.route.snapshot.params['id'];
    this.movie = this.moviesService.getMovie(this.id);
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id'];
        this.movie = this.moviesService.getMovie(this.id);
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
    this.router.navigate(['/watch', this.id], { relativeTo: this.route })
  }
}
