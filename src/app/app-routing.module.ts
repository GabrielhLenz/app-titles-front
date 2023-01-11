import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { FilmesComponent } from './views/movie/movie-home/movie-home.component';
import { DetailsComponent } from './views/movie/details/details.component';
import { TvHomeComponent } from './views/tv/tv-home/tv-home.component';
import { TvDetailsComponent } from './views/tv/tv-details/tv-details.component';
import { MovieSearchComponent } from './views/movie/movie-search/movie-search.component';
import { TvSearchComponent } from './views/tv/tv-search/tv-search.component';
import { SeasonComponent } from './views/tv/season/season.component';
import { LoginComponent } from './views/login/login.component';


const routes: Routes = [{
  path: "",
  component: HomeComponent,
  pathMatch: 'full'
  },{
    path: "filmes",
    component: FilmesComponent
  },{
    path: 'filmes/:id',
    component: DetailsComponent
  },{
    path: "filmes/search/:query",
    component: MovieSearchComponent
  },{
    path: "series",
    component: TvHomeComponent
  },{
    path: "series/:id",
    component: TvDetailsComponent
  },{
    path: "series/:id/season/:season",
    component: SeasonComponent
  },{
    path: "series/search/:query",
    component: TvSearchComponent
  },
  {
    path: "login",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
