import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './public/home/home.component';
import { AuthHomeComponent } from './auth/home/auth-home/auth-home.component';
import { PublicGuard } from './common/guards/public.guard';
import { AuthenticatedGuard } from './common/guards/authenticated.guard';

const routes: Routes = [
  {
    path:'', pathMatch:'full', redirectTo:'/home'
  },
  {
    path:'home', pathMatch:'full', component:HomeComponent,
    // canActivate:[PublicGuard],
  },
  {
    path:'auth-home',pathMatch:'full', component:AuthHomeComponent,
    canActivate:[AuthenticatedGuard],
  }
];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}