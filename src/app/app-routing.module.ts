import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MovieDetailsComponent } from './main/movie-details/movie-details.component';
import { MoviesListComponent } from './main/movies-list/movies-list.component';
import { WatchMovieComponent } from './watch-movie/watch-movie.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';

const routes: Routes = [
    { path: '', redirectTo: '/list', pathMatch: 'full' },
    {
        path: '', component: SiteLayoutComponent, children: [
            {
                path: 'list', component: MoviesListComponent, children: [
                    { path: ':genre_id/:id', component: MovieDetailsComponent },
                ]
            },
            { path: 'watch/:genre_id/:id', component: WatchMovieComponent },
            { path: 'search', component: SearchMovieComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}
