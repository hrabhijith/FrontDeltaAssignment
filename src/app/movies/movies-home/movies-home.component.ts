
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-home',
  templateUrl: './movies-home.component.html',
  styleUrls: ['./movies-home.component.css']
})
export class MoviesHomeComponent implements OnInit {

  isValid = true;
  

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.isValid.
  subscribe(
    (valid: boolean) =>{
      this.isValid = valid;
    }
  )
  }

  onSignIn(form: NgForm){
    const email = form.value.email;
    const pass = form.value.password;
    this.authService.onSignIn(email, pass);
   
  }
  onSignUp(){
    this.router.navigate(['signup']);
  }

}
