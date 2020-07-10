import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";
import { MoviesListComponent } from "./movies-list/movies-list.component";
import { WatchMovieComponent } from "./watch-movie/watch-movie.component";
import { SearchMovieComponent } from "./search-movie/search-movie.component";
import { MovieShortDetailsComponent } from "./search-movie/movie-short-details/movie-short-details.component";
import { AppComponent } from "./app.component";
import { MainComponent } from "./main/main.component";

const routes: Routes = [
  { path: "", redirectTo: "/list", pathMatch: "full" },
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "list",
        component: MoviesListComponent,
        children: [{ path: ":id", component: MovieDetailsComponent }],
      },

        {
            path: "search",
            component: SearchMovieComponent,
            // children: [{ path: ":id", component: MovieShortDetailsComponent }],
            children: [{path: ":id", component: MovieDetailsComponent}]
      },
    ],
  },

  { path: "watch/:id", component: WatchMovieComponent },
  //   {
  //     path: "",
  //     component: MainComponent,
  //     children: [

  //     ],
  //   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
