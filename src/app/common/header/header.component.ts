import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
//servicio que se puede usar para almacenar en local storage,session
import { SessionStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthenticationService,
              public sessionStorageService:SessionStorageService,
              public router:Router) { }

  ngOnInit(): void {
  }

  handleLogin(event){
    console.log("Click en login");
    const email='everpe92@gmail.com';
    const pwd='everpe92';
    this.authService.login(email,pwd).subscribe(

      (data)=>{
        this.authService.user=data;
        this.authService.hasSession=true;
        this.sessionStorageService.store('user',data);
        this.router.navigate(['auth-home']);
      },
      (error)=>{
        console.error(error);
        this.authService.hasSession=false;
      }
    );
  }

  handleLogout(event){
    console.log('Saliendo');
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
