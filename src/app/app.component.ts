import { Component } from '@angular/core';
import { MoviesService } from './shared/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MoviesService]
})
export class AppComponent {
  title = 'kino-hunter';
}
