import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../api.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Movie } from '../../models/Movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @Input() movie: Movie;
  @Output() updateMovie = new EventEmitter<Movie>();
  rateHovered = 0;
  faStar = faStar;

  constructor(
    private apiService: ApiService
  ) { }


  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  rateHover(rate: number) {
    this.rateHovered = rate;
  }

  // tslint:disable-next-line:typedef
  rateClicked(rate: number) {
    this.apiService.rateMovie(rate, this.movie.id).subscribe(
      result => this.getDetails(),
      error => console.log(error)
   );
  }

  // tslint:disable-next-line:typedef
  getDetails() {
    this.apiService.getMovie(this.movie.id).subscribe(
      (movie: Movie) => {
        this.updateMovie.emit(movie);
      },
      error => console.log(error)
    );
  }
}
