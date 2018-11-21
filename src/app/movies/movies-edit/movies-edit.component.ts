import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MoviesService } from '../movies.service';
import { Actors } from '../actors.model';
import { Movies } from '../movies.model';
import { Producers } from '../producers.model';

@Component({
  selector: 'app-movies-edit',
  templateUrl: './movies-edit.component.html',
  styleUrls: ['./movies-edit.component.css']
})
export class MoviesEditComponent implements OnInit {

  editMode = false;
  actors: Actors[];
  actorsCall: Actors[];
  existingClick = false;
  id: number;
  moviesForm: FormGroup;
  constructor(private activeRoute: ActivatedRoute, private moviesService: MoviesService,
    private route: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.onInit();
      }
    );
    // this.moviesService.aa.subscribe(
    //   (Movies: Movies[]) => {
    //     this.actorsCall = Movies.values[
    //   }
    // );
  }
  onCancel() {
    this.route.navigate(['../'], { relativeTo: this.activeRoute });
  }
  onAddNewActor() {
    (<FormArray>this.moviesForm.get('actors')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'birthDate': new FormControl(null, Validators.required),
        'gender': new FormControl(null, Validators.required),
        'bioData': new FormControl(null, Validators.required)
      })
    )

  }

  onSubmit() {
    if (this.editMode) {
      this.moviesService.updateMovie(this.id, this.moviesForm.value);
      
    }
    else {
      this.moviesService.addMovie(this.moviesForm.value);
      
    }
    this.onCancel();
  }
  onDeleteActor(index: number) {

    (<FormArray>this.moviesForm.get('actors')).removeAt(index);

  }



  private onInit() {
    let movieName = '';
    let movieYear: number;
    let moviePoster = '';
    let moviePlot = '';
    let actorArray = new FormArray([]);
    let producerGroup: FormGroup;
    let movieproducer: Producers;



    if (this.editMode) {
      const selectedMovie = this.moviesService.getSpecificMovie(this.id);
      movieName = selectedMovie.name;
      movieYear = selectedMovie.releaseYear;
      moviePoster = selectedMovie.poster;
      moviePlot = selectedMovie.plot;
      movieproducer = selectedMovie.producers;

      if (selectedMovie['actors']) {
        for (let actor of selectedMovie.actors) {
          actorArray.push(
            new FormGroup({
              'name': new FormControl(actor.name, Validators.required),

              'gender': new FormControl(actor.gender, Validators.required),
              'birthDate': new FormControl(actor.birthDate, Validators.required),
              'bioData': new FormControl(actor.bioData, Validators.required)
            })
          )
        }


      }


      producerGroup = new FormGroup({
        'name': new FormControl(movieproducer.name, Validators.required),

        'gender': new FormControl(movieproducer.gender, Validators.required),
        'birthDate': new FormControl(movieproducer.birthDate, Validators.required),
        'bioData': new FormControl(movieproducer.bioData, Validators.required)
      })





    }
    else {
      actorArray.push(

        new FormGroup({
          'name': new FormControl(null, Validators.required),

          'gender': new FormControl(null, Validators.required),
          'birthDate': new FormControl(null, Validators.required),
          'bioData': new FormControl(null, Validators.required)
        })

      );


      producerGroup = this.formBuilder.group({
        'name': new FormControl(null, Validators.required),

        'gender': new FormControl(null, Validators.required),
        'birthDate': new FormControl(null, Validators.required),
        'bioData': new FormControl(null, Validators.required)
      })
    }



    
    this.moviesForm = new FormGroup({
      'name': new FormControl(movieName, Validators.required),
      'poster': new FormControl(moviePoster, Validators.required),
      'plot': new FormControl(moviePlot, Validators.required),
      'releaseYear': new FormControl(movieYear, Validators.required),
      'actors': actorArray,
      'producers': producerGroup
    });

  }

  get formData() {
    return <FormArray>this.moviesForm.get('actors');
  }


  viewActors() {

  }
}
