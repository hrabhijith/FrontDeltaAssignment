
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { MoviesComponent } from './movies/movies.component';
import { MoviesDetailComponent } from './movies/movies-detail/movies-detail.component';
import { MoviesEditComponent } from './movies/movies-edit/movies-edit.component';
import { MoviesStartComponent } from './movies/movies-start/movies-start.component';
import { MoviesHomeComponent } from './movies/movies-home/movies-home.component';
import { AuthGuard } from './auth-guard.service';
import { MoviesSignupComponent } from './movies/movies-signup/movies-signup.component';
import { NgModule } from "@angular/core";

const appRoutes: Routes = [
  {path: 'signin', component: MoviesHomeComponent},
  {path: 'signup', component: MoviesSignupComponent},
  { path: '', redirectTo: '/movies', pathMatch: 'full'  },
    {path: 'movies', component: MoviesComponent, children: [
      { path: '', component: MoviesStartComponent },
      { path: 'new', component: MoviesEditComponent, canActivate: [AuthGuard]},
      { path: ':id', component: MoviesDetailComponent},
       { path: ':id/edit', component: MoviesEditComponent, canActivate: [AuthGuard] } 
]}];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
