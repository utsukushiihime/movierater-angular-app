import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Movie } from '../../models/Movie';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Input() movies: Movie[] = [];
  @Output() selectMovie = new EventEmitter<Movie>();
  @Output() editedMovie = new EventEmitter<Movie>();
  faEdit = faEdit;
  faTrash = faTrash;

  constructor() {}

  ngOnInit(): void {}
    movieClicked = (movie: Movie) => {
      this.selectMovie.emit(movie);
    };

    editMovie = (movie: Movie) => {
      this.editedMovie.emit(movie);
    };
}
