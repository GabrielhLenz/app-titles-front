import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { FilmesComponent } from './views/movie/movie-home/movie-home.component';
import { GenresComponent } from './components/template/genres/genres.component';
import { DetailsComponent } from './views/movie/details/details.component';
import { TvHomeComponent } from './views/tv/tv-home/tv-home.component';
import { TvDetailsComponent } from './views/tv/tv-details/tv-details.component';
import { MovieSearchComponent } from './views/movie/movie-search/movie-search.component';
import { TvSearchComponent } from './views/tv/tv-search/tv-search.component';
import { FormsModule } from '@angular/forms';
import { SeasonComponent } from './views/tv/season/season.component';
import { LoginComponent } from './views/login/login.component';
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    FilmesComponent,
    GenresComponent,
    DetailsComponent,
    TvHomeComponent,
    TvDetailsComponent,
    MovieSearchComponent,
    TvSearchComponent,
    SeasonComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSidenavModule,
    MatListModule, 
    MatCardModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
