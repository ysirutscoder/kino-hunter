export class Movie {
    constructor(
        public id: number,
        public original_title: string,
        public title: string,
        public overview: string,
        public release_date: string,
        public poster_path: string,
        public backdrop_path: string,
        public imdb_id: string,
        public media_type?: string,
        public genre_id?: number
    ) { }
}