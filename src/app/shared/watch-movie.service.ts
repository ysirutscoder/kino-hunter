import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

export interface GetKpIdResponse {
  data: [
    {
      kinopoisk_id?: number;
      kp_id?: number;
    }
  ];
}

@Injectable()
export class WatchMovieService {
  constructor(private http: HttpClient) {}

  getKpId(imdb_id: string): Observable<number> {
    console.log(1);
    const url = `https://videocdn.tv/api/short?api_token=dgsl8iCsuXW3YldaHAZ6hJt2p1TM7go6&imdb_id=${imdb_id}`;
    return this.http.get(url, { responseType: "json" }).pipe(
      map((response: GetKpIdResponse) => {
        console.log(response);
        console.log(response.data[0].kinopoisk_id || response.data[0].kp_id);
        return response.data[0].kinopoisk_id || response.data[0].kp_id;
      })
    );
  }
}
