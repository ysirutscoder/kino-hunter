import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Movie } from "../shared/movie.model";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  searchInputValue: string;
  @Input() selectedMovie: Movie;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams
      .subscribe((params: Params) => {
        this.searchInputValue = params['q'];
      })
  }

  playMovie() {
    this.router.navigate(["/watch", this.selectedMovie.id], {
      relativeTo: this.route,
    });
  }

  handleSearchClick() {
    console.log(this.searchInputValue);
    if (this.searchInputValue.length > 0) {
      this.router.navigate(["/search"], {
        queryParams: { q: this.searchInputValue },
        relativeTo: this.route,
      });
    }
  }
}
