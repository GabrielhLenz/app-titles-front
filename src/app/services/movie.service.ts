import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { GenreMovie } from '../models/genreMovie';
import { FilmesComponent } from '../views/movie/movie-home/movie-home.component';
import { UpComingMovie } from '../models/movie/upComing';
import { MovieSearch } from '../models/movie/movieSearch';
import { CreditsMovie } from '../models/movie/creditsMovie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url = "https://api.themoviedb.org/3/"
  apiKey = "381219db1188d619f9b12463dd86c907"
  constructor(private http: HttpClient) { }

  getLatestMovies(): Observable<any> {
    return this.http.get<any>(this.url + "/movie/latest?api_key=" + this.apiKey);
  }

  getPopularMovies(page: number): Observable<Movie> {
    return this.http.get<Movie>(this.url + "/movie/popular?api_key=" + this.apiKey + "&language=pt-BR&page=" + page);
  }

  getUpComingMovies(page: number): Observable<UpComingMovie> {
    return this.http.get<UpComingMovie>(this.url + "movie/upcoming?api_key=" + this.apiKey + "&language=pt-BR&page=" + page)
  }

  getNowPlayingMovies(page: number): Observable<UpComingMovie> {
    return this.http.get<UpComingMovie>(this.url + "movie/now_playing?api_key=" + this.apiKey + "&language=pt-BR&page=" + page)
  }

  getSearchMovie(query: string, page: number): Observable<Movie> {
    return this.http.get<Movie>(this.url + "search/movie?api_key=" + this.apiKey + "&language=pt-BR&page=" + page + "&query=" + query)
  }

  getGenreMovies(page: number, genre: number): Observable<any> {
    return this.http.get<any>(this.url + "discover/movie?api_key=" + this.apiKey + "&language=pt-BR&sort_by=popularity.desc&page=" + page + "&with_genres=" + genre)
  }


  getDetailsMovie(id: number): Observable<any> {
    return this.http.get<any>(this.url + "movie/" + id + "?api_key=" + this.apiKey + "&language=pt-BR")
  }

  getSimilarMovies(id: number): Observable<MovieSearch> {
    return this.http.get<MovieSearch>(this.url + "movie/" + id + "/similar?api_key=" + this.apiKey)
  }

  getCreditsMovie(id: number): Observable<CreditsMovie> {
    return this.http.get<CreditsMovie>(this.url + "movie/" + id + "/credits?api_key=" + this.apiKey + "&language=pt-BR")
  }
  
}


