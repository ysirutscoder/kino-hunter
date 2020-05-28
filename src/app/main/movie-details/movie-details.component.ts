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


  }

  async ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.movie = await this.moviesService.getMovie(this.id, 'genres');
    this.route.params
      .subscribe(async (params: Params) => {
        this.id = +params['id'];
        this.movie = await this.moviesService.getMovie(this.id, 'genres');
        this.expanded = false;
      })
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

  getSlicedOverview() {
    return (this.movie.overview.split(' ').length + this.movie.title.split(' ').length) <= 25 ?
      this.movie.overview :
      this.movie.overview.split(' ').slice(0, (25 - 3 * this.movie.title.split(' ').length)).join(' ');
  }
}
