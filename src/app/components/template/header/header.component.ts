import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  route: string= 'filmes/search'
  query: string ='adam'
  token = localStorage.getItem('token')
  constructor( ) { 
  }

  ngOnInit(): void {
  }

  alterSearch(index: string){
  }

  settings(){
    console.log(1)
    console.log(localStorage.getItem('token'))
    if(this.token != 'Login'){
      localStorage.clear()
      this.token='Login'
    }
    else{

      console.log("Login")
    }
  }
}
