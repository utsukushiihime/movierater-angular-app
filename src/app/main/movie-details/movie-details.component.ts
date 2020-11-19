import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../api.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @Input() movie;
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
  rateClicked(rate: number) {
    this.apiService.rateMovie(rate, this.movie.id).subscribe(
      error => console.log(error)
    );
  }
}
