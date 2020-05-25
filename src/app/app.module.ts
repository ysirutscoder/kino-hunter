import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MoviesListComponent } from './main/movies-list/movies-list.component';
import { MovieDetailsComponent } from './main/movie-details/movie-details.component';
import { WatchMovieComponent } from './watch-movie/watch-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteLayoutComponent,
    SidenavComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    WatchMovieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
