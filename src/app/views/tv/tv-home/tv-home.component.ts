import { Component, OnInit } from '@angular/core';
import { PopularTVShow } from 'src/app/models/tv/popular';
import { TvService } from 'src/app/services/tv/tv.service';
import { TVSearch } from 'src/app/models/tv/tvSearch';

@Component({
  selector: 'app-tv-home',
  templateUrl: './tv-home.component.html',
  styleUrls: ['./tv-home.component.css']
})
export class TvHomeComponent implements OnInit {
  page: number = 1
  text: string = 'titanic'
  popularTVShows!: PopularTVShow;
  search!: TVSearch;
  section: string = 'series';
  public getOption: string | undefined;
  public getGenreOption!: number;

  constructor(
    public tvService: TvService
  ) { }

  ngOnInit(): void {
    this.getPopularTV()
    this.getSearch()
  }

  getPopularTV(){
    this.tvService.getPopularTVShow(this.page).subscribe(data => {
      this.popularTVShows = this.modifyData(data)
      console.log(this.popularTVShows)
    })
  }

  getSearch(){
    this.tvService.getSearchTVShow(this.text, this.page).subscribe(data => {
      this.search = data
      console.log(this.search)
    })
  }

  getTvGenre(){
    this.tvService.getGenreTVShow(this.page, this.getGenreOption).subscribe(data => {
      this.popularTVShows = data
    })
  }

  next() {
    this.page++
    this.getPopularTV()
  }

  public setOption(event: string){
    this.getOption = event
  }
  
  modifyData(tvShows: PopularTVShow): PopularTVShow {
    if (tvShows.results) {
      tvShows.results.forEach(element => {
        element.backdrop_path = "https://image.tmdb.org/t/p/original" + element.backdrop_path + "?api_key=" + this.tvService.apiKey
      })
    }
    return tvShows
  }

  public setGenreOption(event: number){
    this.getGenreOption = event
    this.getTvGenre()
  }

  
  nextPage(){
    this.page++
    this.getPopularTV()
    console.log(this.page)
  }

  previousPage(){
    if(this.page>1)
    this.page--
    this.getPopularTV()
    console.log(this.page)
  }

  
}
