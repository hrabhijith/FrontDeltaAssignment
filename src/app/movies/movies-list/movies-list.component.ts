
import { Movies } from '../movies.model';
import { MoviesService } from '../movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies: Movies[];
  constructor(private moviesService: MoviesService, 
  private activeRoute: ActivatedRoute, private router: Router, private authService: AuthService, private dataService: DataService){

  }

  ngOnInit(){
    this.moviesService.onChangeMovies.subscribe(
      (movies: Movies[]) => {
        this.movies = movies;
      }
    )
   
    this.dataService.getData();
    
  }

  onSelectNew(){
    const authStatus = this.authService.isAuthenticated();
    if(authStatus)
    {
      this.router.navigate(['new'], {relativeTo: this.activeRoute});
    }
    else
    {
      alert("Please Login to add a movie");
      this.router.navigate(['signin']);
    }
     
   }

}
