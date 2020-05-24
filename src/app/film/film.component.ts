import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-film',
    templateUrl: './film.component.html',
    styleUrls: ['./film.component.scss']
})

interface Movie {
    name: string;
    id: number;
    authore: string;
    raiting: number;


}

export class FilmComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
