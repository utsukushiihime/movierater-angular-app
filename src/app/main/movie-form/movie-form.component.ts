import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/Movie';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

movieForm;
id = null;

@Input() set movie(val: Movie) {
  this.id = val.id;
  this.movieForm = new FormGroup({
    title: new FormControl(val.title),
    description: new FormControl(val.description)
  });
}

constructor() { }

ngOnInit(): void {
}

// tslint:disable-next-line:typedef
formDisabled() {
  return !(this.movieForm.value.title.length && this.movieForm.value.description.length);
}

// tslint:disable-next-line:typedef
saveForm() {
  console.log(this.movieForm.value);
}

}
