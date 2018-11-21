//import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Movies } from './movies/movies.model';
import { MoviesService } from './movies/movies.service';
import { Actors } from './movies/actors.model';
import { Producers } from './movies/producers.model';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  


  constructor(private httpClient: HttpClient,
    private authService: AuthService, private movieService: MoviesService) { }

SaveData() {
    const req = new HttpRequest('PUT', 'https://ng-delta.firebaseio.com/movies.json', 
    this.movieService.getMovies(), {
        reportProgress: true
    } );
    return this.httpClient.request(req);
    // return this.httpClient.put('https://ng-market-76840.firebaseio.com/recipe.json?auth=' + token, 
    // this.recipeService.onrecipe());
    
}

getData() {

    
    this.httpClient.get<Movies[]>('https://ng-delta.firebaseio.com/movies.json', {
        observe: 'body',
        responseType: 'json',
        reportProgress: true     
    })

        .subscribe(
            (movies) => {
                
                for (let movie of movies) {
                    if (!movie['Actors']) {
                        movie['Actors'] = [];
                    }
                }
                for (let movie of movies) {
                  if (!movie['Producers']) {
                      movie['Producers'] = [];
                  }
              }
                this.movieService.onFetchFromServer(movies);
            }



        )

}
}
