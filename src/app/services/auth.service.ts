import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { API_CONFIG } from '../config/api.config';
import { Authenticate } from '../models/authentication';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtService: JwtHelperService = new JwtHelperService

  constructor(private http: HttpClient) { }

  authenticate(creds : Authenticate){
    console.log(creds)
    return this.http.post(`${API_CONFIG.url}/login`, creds, { observe: 'response', responseType: 'text'})
  }

  create(creds: any){
    console.log(creds)
    return this.http.post(`${API_CONFIG.url}/users/create`, creds, { observe: 'response', responseType: 'text'})
  }

  loginSuccess(authToken: string|null){
    if(authToken!=null){
      authToken.substring(7)
      localStorage.setItem('token', authToken)
      alert(authToken)
    }else
    alert(1)
  }

  isAuthenticated(){
    let token = localStorage.getItem('token')
    if(token!= null){
      return !this.jwtService.isTokenExpired(token)
    }
    return false
  }
}
