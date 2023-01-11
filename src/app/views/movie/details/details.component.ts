import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreditsMovie } from 'src/app/models/movie/creditsMovie';
import { MovieSearch } from 'src/app/models/movie/movieSearch';
import { Details } from 'src/app/models/movieDetails';
import { MovieService } from 'src/app/services/movie.service';
import { HttpClient } from '@angular/common/http';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  details!: Details
  similar!: MovieSearch
  credits!: CreditsMovie
  id!: number
  idUser!: number
  url:string ='http://localhost:8080/titles'
  selectedSituation!: number
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private http: HttpClient
    ) {  
      this.getId()
    }

  ngOnInit(): void {
    const token = localStorage.getItem('token')
    if(token!=null){
      const data = jwtDecode(token) as any
      this.idUser=data.id
      this.getData()
    }
    this.getDetails()
    
  }
  getDetails(){
    this.movieService.getDetailsMovie(this.id).subscribe(data => {
      console.log(data)
      this.details = this.modifyData(data)
      console.log(this.details)
    })
  }
  
  getSimilarMovies(){ 
    this.movieService.getSimilarMovies(this.id).subscribe(data => {
      this.similar = data      
    })
  }

  getCreditsMovie(){
    this.movieService.getCreditsMovie(this.id).subscribe(data =>{
      this.credits = data
      console.log(data)
    })
  }

  getId() {
    this.id = Number(this.route.snapshot.paramMap.get("id")) 
  }

  getData(){
    return this.http.get(this.url + "/" + this.id).subscribe(data => {
      console.log(data)
      this.selectedSituation = (data as any).situation
      console.log(this.selectedSituation)
    })
  }

  modifyData(details: Details): Details{
    details.vote_average = Math.round(details.vote_average*10)
    return details
  }

  situation(situation: number){
    const token = localStorage.getItem('token')
    var user =0
    if(token!=null){
    const aux = jwtDecode(token) as any
    user = aux.id
    }
    const data = {
      id: this.id, 
      type: 0, 
      situation: situation,
      user: user
    }
    this.http.post(this.url, data).subscribe(response => {
      this.selectedSituation = situation
    });
  }
  
  delete(){
    this.http.delete(this.url + "/" + this.id).subscribe(response =>{
      this.selectedSituation = -1
    })
  }
}
