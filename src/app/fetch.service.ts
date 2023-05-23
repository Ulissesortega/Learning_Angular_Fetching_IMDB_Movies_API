import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  private headers = new HttpHeaders({
    'X-RapidAPI-Key': 'e925ce681amsh0084a34f04559c6p1053f1jsn179a2394f079',
    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
  });

  constructor(private _http: HttpClient) { }

  getData() {
    return this._http.get('https://imdb-top-100-movies.p.rapidapi.com', { headers: this.headers });
  }
}
