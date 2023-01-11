import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var token = localStorage.getItem('token')

    if(token){
      const cloneRequest = request.clone({ headers: request.headers.set('Authorization', `${token}`)})
      console.log(cloneRequest)
      return next.handle(cloneRequest)
    }
    return next.handle(request);
  }
}

export const AuthInterceptorProvider = [{
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}]
