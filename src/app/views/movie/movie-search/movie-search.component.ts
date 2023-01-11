import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieSearch } from 'src/app/models/movie/movieSearch';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  query!: string
  results!: MovieSearch
  constructor(    private route: ActivatedRoute,
                  private searchResults: MovieService
    ) { 
      this.query = String(this.route.snapshot.paramMap.get("query"))
    }

  ngOnInit(): void {
    this.getSearchResults()
  }

  getSearchResults(){
    this.searchResults.getSearchMovie(this.query, 1).subscribe(data => {
      this.results = data
    })
  }

}
