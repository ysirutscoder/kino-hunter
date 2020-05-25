export class Movie {
    constructor(
        public id: number,
        public original_title: string,
        public title: string,
        public overview: string,
        public release_date: string,
        public poster_path: string,
        public backdrop_path: string
    ) { }
}