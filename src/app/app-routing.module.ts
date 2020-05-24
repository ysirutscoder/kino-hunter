import {SiteLayoutComponent} from './shared/layouts/site-layout/site-layout.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MainComponent} from './main/main.component';


const routes: Routes = [
    {
        path: '', component: SiteLayoutComponent, children: [
            {path:'main', component: MainComponent}
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
