import { Injectable } from '@angular/core';
import {API} from '../../config/api-global';
import { HttpClient } from '@angular/common/http';
import { SessionStorageService } from 'ngx-webstorage';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user:object;
  hasSession:boolean=false;

  constructor(public http: HttpClient,
              public sessionStorageService:SessionStorageService) {

  }
  public login(email:string,password:string){
    const url=`${API.AUTH_SERVICES_BASE_URL}/auth/login`;
    return this.http.post(url,{email,password});
  }
  public logout(){
    this.user=null;
    this.hasSession=false;
    this.sessionStorageService.clear('user');
  }
  /**
   * Comprueba si un user tiene token
   */
  public isLoggedIn(){
    const user= this.sessionStorageService.retrieve('user');
    if(!!user){
      this.user=user;
      this.hasSession=true;
    }
    return this.hasSession;
  }
  public refreshToken(){
    const url=`${API.AUTH_SERVICES_BASE_URL}/auth/refresh`;
    return this.http.post(url,{}).subscribe(
      (data)=>{
        this.logout();
        this.user=data;
        this.hasSession=true;
        this.sessionStorageService.store('token',data);
      }, (error)=>{
        console.error(error);
        this.hasSession=false;
      });
  }


}
