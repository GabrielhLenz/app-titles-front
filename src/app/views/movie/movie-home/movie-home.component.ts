import { Component, OnInit, Input, OnChanges, SimpleChanges, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie';

import { Genres } from 'src/app/models/genres';
import { GenresService } from 'src/app/services/genres.service';
import { UpComingMovie } from 'src/app/models/movie/upComing';
import { MovieSearch } from 'src/app/models/movie/movieSearch';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-filmes',
  templateUrl: './movie-home.component.html',
  styleUrls: ['./movie-home.component.css']
})
export class FilmesComponent implements OnInit {
  latestMovies: any;
  popularMovies!: Movie;
  upComingMovies!: UpComingMovie;
  nowPlayingMovies!: UpComingMovie;
  page: number =1;
  genres!: Genres;
  filter: string = "popular";
  text: string = 'titanic'
  search!: MovieSearch;
  section='filmes';
  public getOption: string = 'popular';
  public getGenreOption!: number;


  constructor(
    public movieService: MovieService,
    public genresService: GenresService,
    private route: ActivatedRoute
  ) {
    this.getSort()
   }

   
  ngOnInit(): void {
    this.getPopularMovies()
    this.getUpComingMovies()
    this.getNowPlayingMovies()
    this.getMovieGenre()
    this.getSearchMovies()
  }



  getLatestMovies(){
    this.movieService.getLatestMovies().subscribe(data => {
      this.latestMovies = this.changeData(data);
      // console.log(this.latestMovies);
    });
  }
  changeData(data: any): any {
    if (!data.backdrop_path) {
      data.backdrop_path = "https://image.tmdb.org/t/p/original" + data.poster_path + "?api_key=" + this.movieService.apiKey;
    }
    else {
      data.backdrop_path = "https://image.tmdb.org/t/p/original" + data.backdrop_path + "?api_key=" + this.movieService.apiKey;
    }
    return data;
  }

  getPopularMovies() {
    this.movieService.getPopularMovies(this.page).subscribe(data => {
      this.popularMovies = this.modifyData(data);
       //console.log(this.popularMovies);
    });
  }
  
  getUpComingMovies(){
    this.movieService.getUpComingMovies(this.page).subscribe(data => {
      this.upComingMovies = data;
      console.log(data)
    })
  }

  getNowPlayingMovies(){
    this.movieService.getNowPlayingMovies(this.page).subscribe(data => {
      this.nowPlayingMovies = data;
    })
  }

  getSearchMovies(){ 
    this.movieService.getSearchMovie(this.text, this.page).subscribe(data => {
      this.search = data
    })
  }

  getMovieGenre(){
  if(this.getOption == "popular"){
    this.movieService.getGenreMovies(this.page, this.getGenreOption).subscribe(data => {
      this.popularMovies = this.modifyData(data);
      this.getUpComingMovies()
      this.getNowPlayingMovies()
     })
    }
  else if(this.getOption =="upComing"){
      this.movieService.getGenreMovies(this.page, this.getGenreOption).subscribe(data => {
      this.upComingMovies = data;
      this.getPopularMovies()
      this.getNowPlayingMovies()
    });
  }
  else{
    this.movieService.getGenreMovies(this.page, this.getGenreOption).subscribe(data => {
    this.nowPlayingMovies = data;
    this.getPopularMovies()
    this.getUpComingMovies()
});
  }
}
  modifyData(movies: Movie): Movie {
    if (movies.results) {
      movies.results.forEach(element => {
        element.backdrop_path = "https://image.tmdb.org/t/p/original" + element.backdrop_path + "?api_key=" + this.movieService.apiKey
        if (!element.title) {
          element.title = element?.name;
        }
      });
    }
    return movies
  }


  getGenres(){
    this.genresService.getGenres().subscribe(data => {
      this.genres = data
      console.log(data)
    })
  }

  public setOption(event: string){
    this.getOption = event
  }

  public setGenreOption(event: number){
    this.getGenreOption = event
    this.getMovieGenre()

  }

  getSort(){
   // this.sort = String(this.route.snapshot.paramMap.get("sort"))
  }



  nextPage(){
    this.page++
    this.getPopularMovies()
    console.log(this.page)
  }

  previousPage(){
    if(this.page>1)
    this.page--
    this.getPopularMovies()
    console.log(this.page)
  }
}


