import {SiteLayoutComponent} from './shared/layouts/site-layout/site-layout.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MainComponent} from './main/main.component';
import {FilmComponent} from './film/film.component';



const routes: Routes = [
    {
        path: '', component: SiteLayoutComponent, children: [
            {path:'main', component: MainComponent},
            {path:'main/:id', component: FilmComponent}
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
