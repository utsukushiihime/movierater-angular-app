import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://127.0.0.1:8000/api/movies/';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Token 7b84723e964eb3014e5acac3465e5b2ebca3bc6a'
  });

  constructor(
    private httpClient: HttpClient
  ) { }

  // tslint:disable-next-line:typedef
  getMovies() {
    return this.httpClient.get(this.baseUrl, {headers: this.headers});
  }
}
