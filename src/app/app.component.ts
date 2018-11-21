
import * as firebase from 'firebase';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontDeltaAssignment';
  config = {
    apiKey: "AIzaSyC7hKjgFkC7zSB5RZaC05MDwa7x9aFMUPM",
    authDomain: "ng-delta.firebaseapp.com",
    databaseURL: "https://ng-delta.firebaseio.com",
    projectId: "ng-delta",
    storageBucket: "ng-delta.appspot.com",
    messagingSenderId: "517505996003"
  };
  constructor(){
    firebase.initializeApp(this.config);
  }
  
}
