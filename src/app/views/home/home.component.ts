import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Details } from 'src/app/models/movieDetails';
import { MovieService } from 'src/app/services/movie.service';
import { TvService } from 'src/app/services/tv/tv.service';
import jwtDecode from 'jwt-decode';
import { API_CONFIG } from 'src/app/config/api.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any
  details!: Details
  id!: number
  constructor(
    private tvService: TvService,
    private movieService: MovieService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token')
    if(token!=null){
      const data = jwtDecode(token) as any
      console.log("------------------------")
      console.log(data.id)
      this.id = data.id
      this.getData(data.id).subscribe(data => {
        console.log('-------',  data)
        this.data = this.getDetails(data)
      })
      this.getName()
      
    }

    
  }
  
  getName(){
    var temp = this.http.get(API_CONFIG + '/users/' + this.id).subscribe(data => {
      alert(data)
    }) 
  }

  getData(id: Number){
    return this.http.get('http://localhost:8080/titles/user/' + id).pipe(
    )
  }

  getDataSituation(situation: Number){
    return  this.data = this.http.get('http://localhost:8080/titles/user/' + this.id + '/situation/' + situation)
  }
  
  getDetails(data: any){
    for (const item of data) {
      console.log(item.id);
      if (item.type=="0"){
        console.log("teste")
        this.movieService.getDetailsMovie(item.id).subscribe(dataItem => {
          item.poster_path=dataItem.poster_path
          console.log(dataItem.poster_path)
      })}
      else{
        this.tvService.getDetailsTVShow(item.id).subscribe(dataItem => {
          item.poster_path=dataItem.poster_path
          console.log("-----------------------------")
          console.log(dataItem.poster_path)
      })}
    console.log(data)
    }
    return data
  }

  situation(situation: Number){
    console.log(situation)
    if(situation<0){
      this.getData(this.id).subscribe(data => {
        this.data = this.getDetails(data)
      })    }
    else{
      this.getDataSituation(situation).subscribe(data => {
        this.data = this.getDetails(data)
      })
    }
  }

}
