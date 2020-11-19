import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private movies = ['Hitchhiker\'s Guide to the Galaxy', 'What we do in the shadows', 'Lord of the Rings', 'Alita', 'Valerian' ];

  constructor() { }

  // tslint:disable-next-line:typedef
  getMovies() {
    return this.movies;
  }
}
