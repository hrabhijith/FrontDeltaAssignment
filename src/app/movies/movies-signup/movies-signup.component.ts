
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-signup',
  templateUrl: './movies-signup.component.html',
  styleUrls: ['./movies-signup.component.css']
})
export class MoviesSignupComponent implements OnInit {

  
  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit() {
    
  }

  onSignUp(form: NgForm){
    const email = form.value.email;
    const pass = form.value.password;
    this.authService.onSignUp(email, pass);
  }


}
