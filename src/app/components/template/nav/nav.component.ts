import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Genres } from 'src/app/models/genres';
import { GenresService } from 'src/app/services/genres.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  url: string = 'filmes';
  button: string ='filme';
  option: string = 'section';
  query = document.getElementById("query");
  genres!: Genres;


  @Input() public section!: string; 
  @Output() public options = new EventEmitter();
  @Output() public optionGenre = new EventEmitter();  
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public genresService: GenresService

    ) {
      
    console.log(route.parent)
   }

  ngOnInit(): void {
    console.log(this.section)
    this.getGenres()
  }
  
  optionSearch(option: string){
    this.option=option
    console.log(option)
  }

  getGenres(){
    this.genresService.getGenres().subscribe(data => {
      this.genres = data
      console.log(data)
    })
  }

  //Permite selecionar a ordem de exibição do filme
  order(option: string){
    this.options.emit(option)
  }

  redirect(query: string){
    this.router.navigate([ this.section + '/search/' + query])
    console.log(query)
    //routerLink=/{{section}}/search/{{query.value}}
  }

  selectGenre(id: number){
    console.log(id)
    this.optionGenre.emit(id)
  }
  
}
