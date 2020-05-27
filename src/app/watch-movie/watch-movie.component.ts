import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/movie.model';
import { MoviesService } from '../shared/movies.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { yo } from '../../script.js'

@Component({
  selector: 'app-watch-movie',
  templateUrl: './watch-movie.component.html',
  styleUrls: ['./watch-movie.component.scss']
})
export class WatchMovieComponent implements OnInit {
  movie: Movie;
  id: number;
  searchIdentifier: string;
  imgPath: string;
  kinopoiskId: number;
  canPlay: boolean = false;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
  ) {

    this.initialize();
  }

  ngOnInit() {
  }

  getKinopoiskId() {
    let xhr = new XMLHttpRequest()
    xhr.open("GET", `http://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${this.movie.title}&page=1`, true)
    xhr.setRequestHeader("X-API-KEY", "a8e8a2e5-2e0c-4c38-8e1c-2f2d46bf3258")
    xhr.send()
    xhr.onload = () => {
      let result = JSON.parse(xhr.response)
      if (result.films[0].year == this.movie.release_date.slice(0, 4)) {
        this.kinopoiskId = result.films[0].filmId;
      }
      this.canPlay = true;
    }
  }

  play() {

    yo()

  }

  initialize() {
    setTimeout(() => {
      this.id = +this.route.snapshot.params['id']
      this.movie = this.moviesService.getMovie(this.id)
      this.searchIdentifier = `${this.movie.title} / ${this.movie.original_title} (${this.movie.release_date.slice(0, 4)})`
      this.imgPath = this.moviesService.httpConfig.imgBackgroundBaseUrl + this.movie.backdrop_path;
      this.route.params
        .subscribe((params: Params) => {
          this.id = +params['id'];
          this.movie = this.moviesService.getMovie(this.id);
        })
      let i = 0;
      let interval = setInterval(() => {
        i++
        if (this.movie) {
          clearInterval(interval);
          this.getKinopoiskId()

        } else if (i > 50) { console.log("ERROR"); clearInterval(interval) }
      }, 50)
    }, 200)
  }

}

