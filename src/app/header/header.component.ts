import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Movie } from "../shared/movie.model";
import { MoviesService } from "../shared/movies.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  searchInputValue: string;
  @Input() selectedMovie: Movie;
  id: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.searchInputValue = params["q"];
    });
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      console.log(this.id);
      // this.selectedMovie = await this.moviesService.getMovie(this.id);
    });
  }

  playMovie() {
    this.router.navigate(["/watch", this.selectedMovie.id], {
      relativeTo: this.route,
    });
  }

  handleSearchClick() {
    if (this.searchInputValue.length > 0) {
      this.router.navigate(["/search"], {
        queryParams: { q: this.searchInputValue },
        relativeTo: this.route,
      });
    } else {
      setTimeout(() => {
        if(this.searchInputValue.length === 0)
        this.router.navigate(["/list/28"], { relativeTo: this.route });
      }, 1500);
    }
  }

  handleTyping() {
    this.router.navigate([], {
      queryParams: { q: this.searchInputValue },
      relativeTo: this.route,
      queryParamsHandling: "merge",
    });
  }

  returnBack() {
    this.router.navigate(['/list'], {relativeTo: this.route})
  }
}
