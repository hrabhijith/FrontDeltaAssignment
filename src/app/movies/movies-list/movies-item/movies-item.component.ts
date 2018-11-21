
import { Movies } from '../../movies.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movies-item',
  templateUrl: './movies-item.component.html',
  styleUrls: ['./movies-item.component.css']
})
export class MoviesItemComponent implements OnInit {

  @Input() movies: Movies;
  @Input() index: number;
  
  constructor() { }

  ngOnInit() {
  }

}
