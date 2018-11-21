import { DataService } from './data.service';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MoviesItemComponent } from './movies/movies-list/movies-item/movies-item.component';
import { MoviesDetailComponent } from './movies/movies-detail/movies-detail.component';
import { MoviesEditComponent } from './movies/movies-edit/movies-edit.component';
import { MoviesService } from './movies/movies.service';
import { ToggleDirective } from './toggle.directive';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MoviesStartComponent } from './movies/movies-start/movies-start.component';
import { MoviesHomeComponent } from './movies/movies-home/movies-home.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { MoviesSignupComponent } from './movies/movies-signup/movies-signup.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    MoviesListComponent,
    MoviesItemComponent,
    MoviesDetailComponent,
    MoviesEditComponent,
    ToggleDirective,
    MoviesStartComponent,
    MoviesHomeComponent,
    MoviesSignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
    CommonModule
  ],
  providers: [ DataService, MoviesService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
