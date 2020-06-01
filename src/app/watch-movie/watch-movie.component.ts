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
    let numbersRegExp = /[0-9]+$/;
    
    this.imgPath = `url(${this.moviesService.httpConfig.imgBackgroundBaseUrl + this.movie.backdrop_path})`;
    let errorCounter = 0;
    let interval = setInterval(() => {
      errorCounter++
      if (this.kinopoiskId) {
        clearInterval(interval)
        this.canPlay = true
      }
      else if (errorCounter > 100) { console.log("No film finded"); clearInterval(interval) }
    }, 50)
    let loading = setTimeout(() => {
      if (!this.kinopoiskId) {
        this.searchIdentifier = this.movie.title.match(numbersRegExp) ? `${this.movie.title}` : `${this.movie.title} ${this.movie.release_date.slice(0, 4)}`
        if( this.searchIdentifier) this.canPlay = true;
      }
    }, 5000)
  }

  getKinopoiskId() {
    let xhr = new XMLHttpRequest()
    let url =
      `https://videocdn.tv/api/short?api_token=dgsl8iCsuXW3YldaHAZ6hJt2p1TM7go6&imdb_id=${this.movie.imdb_id}`;
    xhr.open("GET", url , true)
    xhr.send()
    xhr.onload = () => {
      let result = JSON.parse(xhr.response)
      this.kinopoiskId = result.data[0].kinopoisk_id || result.data[0].kp_id 
    }
  }

  play() {
    yo()
  }


}

