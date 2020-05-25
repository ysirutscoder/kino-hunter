import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/movie.model';
import { MoviesService } from 'src/app/shared/movies.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  movies: Movie[] = []


  constructor(private moviesService: MoviesService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  async ngOnInit() {
    await this.moviesService.fetchMovies();
    this.movies = this.moviesService.getMovies();
    this.router.navigate([this.movies[Math.ceil(Math.random() * (this.movies.length))].id], { relativeTo: this.route })
  }

  getImgUrl(imgPath: string) {
    return this.moviesService.httpConfig.imgBaseUrl + imgPath;
  }

}
