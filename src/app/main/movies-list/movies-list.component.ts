import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { Movie } from 'src/app/shared/movie.model';
import { MoviesService } from 'src/app/shared/movies.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  private moviesGenres: { id: number, name: string, movies: Movie[] }[] = [];
  private isSearchOpened: boolean = false;
  private searchInputValue: string;

  @ViewChild('searcher', { static: false }) searcher: ElementRef;
  @ViewChild('searchBtn', { static: false }) searchBtn: ElementRef;

  constructor(private moviesService: MoviesService,
    private router: Router,
    private route: ActivatedRoute,
    private renderer: Renderer2) {

    this.renderer.listen('window', 'click', (e: Event) => {
      if (e.target !== this.searcher.nativeElement &&
        e.target !== this.searchBtn.nativeElement &&
        this.isSearchOpened) {

        this.isSearchOpened = false;
      }
    })
  }

  ngOnInit() {
    this.moviesService.fetchMovies();
    this.moviesGenres = this.moviesService.getMovies();
    let interval = setInterval(() => {
      if (this.moviesGenres.length !== 0) {
        clearInterval(interval)
        this.router.navigate([28, this.moviesGenres[0].movies[Math.ceil(Math.random() * 20)].id], { relativeTo: this.route })
      }
    }, 200)
  }



  getImgUrl(imgPath: string) {
    return this.moviesService.httpConfig.imgBaseUrl + imgPath;
  }

  handleSearchClick() {
    if (this.isSearchOpened == false) {
      this.isSearchOpened = !this.isSearchOpened
      this.searcher.nativeElement.focus()
    }
    else {
      if (this.searchInputValue.length > 0) {
        this.router.navigate(['/search'], { queryParams: { q: this.searchInputValue }, relativeTo: this.route })
      }
    }
  }

  handleEntering(keyCode: number) {
    if (keyCode === 13) this.handleSearchClick()
  }
}
