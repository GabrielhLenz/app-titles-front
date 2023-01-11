import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PopularTVShow } from 'src/app/models/tv/popular';
import { TVDetails } from 'src/app/models/tv/tvDetails';
import { TVSearch } from 'src/app/models/tv/tvSearch';

@Injectable({
  providedIn: 'root'
})
export class TvService {
  url = "https://api.themoviedb.org/3/"
  apiKey = "381219db1188d619f9b12463dd86c907"
  constructor(private http: HttpClient) { }

  getPopularTVShow(page: number): Observable<PopularTVShow> {
    return this.http.get<PopularTVShow>(this.url + "tv/popular?api_key=" + this.apiKey + "&language=pt-BR&page=" + page)
  }

  getDetailsTVShow(id: number): Observable<any> {
    return this.http.get<any>(this.url + "tv/" + id + "?api_key=" + this.apiKey + "&language=pt-BR")
  }

  getSearchTVShow(text: string, page: number): Observable<TVSearch> {
    return this.http.get<TVSearch>(this.url + "search/tv?api_key=" + this.apiKey + "&language=pt-BR&page=" + page + "&query=" + text)
  }

  getCreditsTV(id: number): Observable<any> {
    return this.http.get<any>(this.url + "tv/" + id + "/credits?api_key=" + this.apiKey + "&language=pt-BR")
  }

  getSeasonTV(id: number, season: number): Observable<any> {
    return this.http.get<any>(this.url + "tv/" + id + "/season/" + season + "?api_key=" + this.apiKey + "&language=pt-BR")
  }

  getGenreTVShow(page: number, genre: number): Observable<any> {
    return this.http.get<any>(this.url + "discover/tv?api_key=" + this.apiKey + "&language=pt-BR&page=" + page + "&with_genres=" + genre)
  }


}
