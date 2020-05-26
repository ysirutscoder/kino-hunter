import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MoviesListComponent } from './main/movies-list/movies-list.component';
import { MovieDetailsComponent } from './main/movie-details/movie-details.component';
import { WatchMovieComponent } from './watch-movie/watch-movie.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteLayoutComponent,
    SidenavComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    WatchMovieComponent,
    SearchMovieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
