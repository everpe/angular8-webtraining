/**
 * Inyecta el header en las request que se hagan
 */

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionStorageService } from 'ngx-webstorage';

@Injectable()
export class InjectRequestHeaderInterceptor implements HttpInterceptor {

  constructor(public sessionStorage:SessionStorageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers={
      'Content-Type':'application/json',
    };
    const token=this.getToken();
    if(token){
      request= request.clone({
        setHeaders:{...headers,
          Authorization:`Bearer ${token}`},
      });
    }else{
      request = request.clone({
        setHeaders: headers,
      });
    }
    return next.handle(request);
  }

  getToken(){
    const user=this.sessionStorage.retrieve('user');
    //Si esxiste user y ademas existe su token
    if(!!user&& !!user.token){
      return user.token;
    }
    return false;
  }
}
