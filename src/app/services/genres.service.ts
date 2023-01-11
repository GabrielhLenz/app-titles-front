import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genres } from '../models/genres';

@Injectable({
  providedIn: 'root'
})
export class GenresService {
  url = "https://api.themoviedb.org/3/genre/movie/list?api_key="
  apiKey = "381219db1188d619f9b12463dd86c907"

  constructor(private http: HttpClient ) { }

  getGenres(): Observable<Genres>{
    return this.http.get<Genres>(this.url + this.apiKey + "&language=pt-BR")
  }
}
