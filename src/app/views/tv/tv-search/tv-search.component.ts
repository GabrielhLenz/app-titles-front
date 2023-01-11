import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TVSearch } from 'src/app/models/tv/tvSearch';
import { TvService } from 'src/app/services/tv/tv.service';

@Component({
  selector: 'app-tv-search',
  templateUrl: './tv-search.component.html',
  styleUrls: ['./tv-search.component.css']
})
export class TvSearchComponent implements OnInit {
  query!: string
  results!: TVSearch
  constructor(    private route: ActivatedRoute,
                  private searchResults: TvService

    ) { 
      this.query = String(this.route.snapshot.paramMap.get("query"))
    }

  ngOnInit(): void {
    this.getSearchResults()
  }

  getSearchResults(){
    this.searchResults.getSearchTVShow(this.query, 1).subscribe(data => {
      this.results = data
    })
  }

  next(){
    console.log('terminar')
  }
}
