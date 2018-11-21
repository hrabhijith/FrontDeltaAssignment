import * as firebase from 'firebase/app';
import 'firebase';
import { Router } from '@angular/router';
//import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    token: string;
    isValid = new Subject<boolean>();
  
     
    constructor(private router: Router) { }

    onSignUp(email: string, password: string) {
      
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(
          (response) =>
          {
            this.router.navigate(['signin']);
          }
        )
        .catch(
          (error) => {
            alert(error);
          }
        )

    }

    onSignIn(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                (response) => {
                    this.router.navigate(['/']);
                    firebase.auth().currentUser.getIdToken().
                        then(
                            (token: string) => {
                                this.token = token;
                            }

                        )

                }
            )
            .catch(
                (error) => {
                    alert(error);

                    this.isValid.next(false);

                }
            )

    }

    getToken() {
        firebase.auth().currentUser.getIdToken()
            .then(
                (token: string) => {
                    this.token = token;
                }
            );
        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }

    logOut() {
        firebase.auth().signOut();
        this.token = null;
    }


}