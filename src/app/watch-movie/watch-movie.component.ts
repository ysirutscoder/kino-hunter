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
  mediaType: string;
  searchIdentifier: string;
  findingArea: string;
  imgPath: string;
  kinopoiskId: number;
  canPlay: boolean = false;
  findByTitle: boolean = true;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
  ) { }

  async ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id'];
      })
    this.route.queryParams
      .subscribe((params: Params) => {
        this.mediaType = params['media_type']
      })
    this.movie = await this.moviesService.getMovie(this.id, this.findingArea, this.mediaType);
    this.getKinopoiskId();

    this.imgPath = this.moviesService.httpConfig.imgBackgroundBaseUrl + this.movie.backdrop_path;
    let errorCounter = 0;
    let interval = setInterval(() => {
      errorCounter++
      if (this.kinopoiskId) {
        clearInterval(interval)
        this.canPlay = true
      }
      else if (errorCounter > 100) { console.log("No film finded in KinoP-k"); clearInterval(interval) }
    }, 50)
    let loading = setTimeout(() => {
      if (!this.kinopoiskId) {
        this.searchIdentifier = `${this.movie.title} / ${this.movie.original_title} (${this.movie.release_date.slice(0, 4)})`
        if (this.searchIdentifier) this.canPlay = true;
      }
    }, 2000)
  }

  getKinopoiskId() {
    let xhr = new XMLHttpRequest()
    let url =
      `http://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=
      ${this.movie.original_title ? this.movie.original_title.split(' ').join('%20') : this.movie.title}&page=1`;
    xhr.open("GET", url, true)
    xhr.setRequestHeader("X-API-KEY", "a8e8a2e5-2e0c-4c38-8e1c-2f2d46bf3258")
    xhr.send()
    xhr.onload = () => {
      let result = JSON.parse(xhr.response)
      this.kinopoiskId = result.films.find(film => {
        return film.year.slice(0, 4) == this.movie.release_date.slice(0, 4)
      }).filmId;
    }
  }

  play() {
    yo()
  }


}

