import { Component, OnInit } from '@angular/core';
import { Genres } from 'src/app/models/genres';
import { GenresService } from 'src/app/services/genres.service';

import { FilmesComponent } from 'src/app/views/movie/movie-home/movie-home.component';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  genres!: Genres;
  constructor(
    public genresService: GenresService
  ) { }
  
  ngOnInit(): void {
    this.getGenres()
  }

  getGenres(){
    this.genresService.getGenres().subscribe(data => {
      this.genres = data
      console.log(data)
    })
  }

  selectGenre(id: number){
    console.log(id)
  }
}
