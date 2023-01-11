import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = 1
//  namr = document.getElementById("name");
  constructor( public authService: AuthService,  private router: Router,
    ) { }

  ngOnInit(): void {
  }



   onSubmit(form: any) {
    console.log(form.value.email);
    if(this.login==1){
      this.authService.authenticate(form.value).subscribe(Response => {
        this.authService.loginSuccess(Response.headers.get('Authorization'))
        this.router.navigateByUrl('');
  
      }, ()=>{
        alert("Email ou senha inválidos")
      })
    }
    else{
      this.authService.create(form.value).subscribe(Response => {
        this.router.navigate(['/login'])
      }, ()=>{
        alert("Email já cadastrado")
      })
    }
  }
  
    

  alter(option: number){
    this.login=option
  }
  
}
