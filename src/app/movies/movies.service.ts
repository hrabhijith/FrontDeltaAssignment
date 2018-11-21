
import { Subject } from "rxjs";
import { Movies } from "./movies.model";
import { Actors } from "./actors.model";
import { Producers } from "./producers.model";
//import { DataService } from "../data.service";
import { Injectable } from "@angular/core";

@Injectable()
export class MoviesService {
  //  recipeSelected = new EventEmitter<recipe>();
   onChangeMovies= new Subject<Movies[]>();
   aa = new Subject<Actors[]>();

   
   

movies: Movies[] ;

  
  constructor(){

  }
  getMovies(){
    return this.movies.slice();
 }

  getSpecificMovie(index: number){
    return this.movies[index];
  }

  addMovie(movie: Movies ){
    this.movies.push(movie);
    
    this.onChangeMovies.next(this.movies);
  }

  updateMovie(index: number, updatedMovie: Movies ){
    this.movies[index]=updatedMovie;
    // this.dataService.SaveData()
    // .subscribe(
    //   (response) =>
    //   {
    //     alert("Data saved!")
    //   }
    // )
    
    this.onChangeMovies.next(this.movies);
  }

  deleteMovie(index: number){
    this.movies.splice(index, 1);
    // this.dataService.SaveData()
    // .subscribe(
    //   (response) =>
    //   {
    //     alert("Data saved!")
    //   }
    // )
    this.onChangeMovies.next(this.movies);
  }

  onFetchFromServer(movies: Movies[]){
    this.movies = movies;
    this.onChangeMovies.next(this.movies.slice());
  }
};