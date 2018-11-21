import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService, private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  logOut(){
    this.authService.logOut();
  }
  onSave(){
    
    if(this.authService.isAuthenticated())
    {
      
      this.dataService.SaveData()
    .subscribe(
      (response) =>{}
    )
    alert("Data saved to database!");
    }
    else
    {
      alert("Please Login to save movies");
      this.router.navigate(['signin']);
    }
  }

  // onFetch(){
    
  //   if(this.authService.isAuthenticated())
  //   {
      
  //     this.dataService.getData();
  //   }
  //   else
  //   {
  //     alert("Please Login to fetch movies from database");
  //     this.router.navigate(['signin']);
  //   }
  // }

}
