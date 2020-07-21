import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  AfterViewInit,
} from "@angular/core";
import { Movie } from "src/app/shared/movie.model";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { MoviesService } from "src/app/shared/movies.service";

@Component({
  selector: "app-movie-details",
  templateUrl: "./movie-details.component.html",
  styleUrls: ["./movie-details.component.scss"],
})
export class MovieDetailsComponent implements OnInit {
  @Input() movie: Movie;
  id: number;
  expanded: boolean;
  bgImgUrl: string;
  imgUrl: string;
  @ViewChild("details") details: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private moviesService: MoviesService
  ) {}

  // ngAfterViewInit() {
  //   this.details.nativeElement.scrollIntoView({
  //     behavior: "smooth",
  //     block: "top",
  //   });
  // }

  ngOnInit() {
    // this.id = +this.route.snapshot.params['id'];
    // this.movie = await this.moviesService.getMovie(this.id, 'genres');
    // this.route.params
    //   .subscribe(async (params: Params) => {
    //     this.id = +params['id'];
    //     this.movie = await this.moviesService.getMovie(this.id, 'genres');
    //     this.bgImgUrl = `url('${this.getBgImgUrl()}')`;
    //     this.imgUrl = `url('${this.getImgUrl()}')`;
    //     this.expanded = false;
    //   })
    let interval = setInterval(() => {
      if (this.details.nativeElement) {
        clearInterval(interval);
        this.details.nativeElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 50);
  }

  getBgImgUrl() {
    return `url(${
      this.moviesService.httpConfig.imgBackgroundBaseUrl +
      this.movie.backdrop_path
    })`;
  }

  getImgUrl() {
    return `url(${
      this.moviesService.httpConfig.imgBaseUrl + this.movie.poster_path
    })`;
  }

  getSlicedOverview() {
    return this.movie.overview.split(" ").length +
      this.movie.title.split(" ").length <=
      50
      ? this.movie.overview
      : this.movie.overview
          .split(" ")
          .slice(0, 50 - 2.5 * this.movie.title.split(" ").length)
          .join(" ");
  }
}
