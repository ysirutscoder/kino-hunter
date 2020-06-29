import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  bgImgUrl: string;
  imgUrl: string;
  @ViewChild("details") details: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private moviesService: MoviesService) {


  }


  async ngOnInit() {
    // this.id = +this.route.snapshot.params['id'];
    // this.movie = await this.moviesService.getMovie(this.id, 'genres');
    this.route.params
      .subscribe(async (params: Params) => {
        this.id = +params['id'];
        this.movie = await this.moviesService.getMovie(this.id, 'genres');
        this.bgImgUrl = `url('${this.getBgImgUrl()}')`;
        this.imgUrl = `url('${this.getImgUrl()}')`;
        this.expanded = false;
      })
    let interval = setInterval(() => {
      if (this.details.nativeElement) {
        clearInterval(interval);
        this.details.nativeElement.scrollIntoView({block: "center", inline: "nearest", behavior: 'smooth'});
      }
    }, 50)
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
    return (this.movie.overview.split(' ').length + this.movie.title.split(' ').length) <= 50 ?
      this.movie.overview :
      this.movie.overview.split(' ').slice(0, (50 - 2.5 * this.movie.title.split(' ').length)).join(' ');
  }
}
