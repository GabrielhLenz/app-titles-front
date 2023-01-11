import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TVDetails } from 'src/app/models/tv/tvDetails';
import { TvService } from 'src/app/services/tv/tv.service';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.css']
})
export class TvDetailsComponent implements OnInit {
  details!: any
  id!: number
  credits: any
  season!: any
  seasons!: number
  url:string ='http://localhost:8080/titles'
  seasonOption: any =[] 
  selectedSituation!: number
  constructor(
    private tvService: TvService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { 
    this.getId()
  }

  ngOnInit(): void {
    this.getDetails()
    this.getCreditsTV()
  }

  getDetails(){
    this.tvService.getDetailsTVShow(this.id).subscribe(data => {
      this.details = this.modifyData(data)
      this.seasons=data.number_of_seasons
      for(let i=0;i<this.seasons;i++){
        this.seasonOption[i]=i+1
      }

      this.http.get(this.url + "/" + this.id).subscribe(data => {
        console.log(data)
        this.selectedSituation = (data as any).situation
      })
      this.getEpisodes(1)
    })
  }

  getCreditsTV(){
    this.tvService.getCreditsTV(this.id).subscribe(data =>{
      this.credits = data
    })
  }
  
  getSeasonTV(){
    this.tvService.getSeasonTV(this.id, this.seasons).subscribe(data => {
      this.season = data
    })
  }
  getId(){
    this.id = Number(this.route.snapshot.paramMap.get("id"))
  }

  modifyData(details: any): any{
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
      type: 1, 
      situation: situation,
      user: user
    }
    this.http.post(this.url, data).subscribe(response => {
      this.selectedSituation = situation
    });
  }
  
  delete(){
    
    this.http.delete(this.url + "/" + this.id).subscribe(response => {
      this.selectedSituation = -1
    })
  }

  onSeasonChange(option: any){
    console.log(option.target.value)
    this.getEpisodes(option.target.value)
     
  }

  getEpisodes(option: number){
    this.tvService.getSeasonTV(this.id, option).subscribe(data => {
      console.log(data.episodes)
      this.season=data.episodes
    })
  }
}

