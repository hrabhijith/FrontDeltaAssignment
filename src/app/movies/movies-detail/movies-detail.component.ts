import { Component, OnInit } from '@angular/core';
import { Movies } from '../movies.model';
import { MoviesService } from '../movies.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})
export class MoviesDetailComponent implements OnInit {

  incomingMovie: Movies;
  id: number;
  constructor(private moviesService: MoviesService, private activeRoute: ActivatedRoute,
    private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(
     (params: Params) => {
      this.id = +params['id'];
      this.incomingMovie = this.moviesService.getSpecificMovie(this.id);
     }
    )
    }

  editMovie(){
    if(this.authService.isAuthenticated())
    {
      this.router.navigate(['edit'], {relativeTo: this.activeRoute})
    }
    else
    {
      alert("Please Login to edit movies");
      this.router.navigate(['signin']);
      
    }
    
  }

  deleteMovie(){
    if(this.authService.isAuthenticated())
    {
      
      this.moviesService.deleteMovie(this.id);
      this.router.navigate(['/movies']);
    }
    else
    {
      alert("Please Login to delete movies");
      this.router.navigate(['signin']);
    }
    
  }

}
