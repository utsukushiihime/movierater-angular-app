import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import { Movie } from '../models/Movie';
import { Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  movies: Movie[]  = [];
  selectedMovie = null;
  editedMovie = null;



  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getMovies().subscribe(
      (data: Movie[] ) => {
        this.movies = data;
      },
      error => console.log(error)
    );
  }
  // tslint:disable-next-line:typedef
  selectMovie(movie: Movie) {
    this.selectedMovie = movie;
    this.editedMovie = null;
  }
  // tslint:disable-next-line:typedef
  editMovie(movie: Movie) {
    this.editedMovie = movie;
    this.selectedMovie = null;
  }

  // tslint:disable-next-line:typedef
  createNewMovie() {
    this.editedMovie = {title: '', description: ''};
    this.selectedMovie = null;
  }

  // tslint:disable-next-line:typedef
  deletedMovie(movie: Movie) {
    this.apiService.deleteMovie(movie.id).subscribe(
    // TODO Remove using API
    //   error => console.log(error)
      console.log('delete :' , movie.title)
    );
  }
}
