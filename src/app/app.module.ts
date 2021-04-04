import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {httpInterceptorProviders} from './common/interceptors';

import { AppComponent } from './app.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './public/home/home.component';
import { FullBannerComponent } from './public/home/full-banner/full-banner.component';
import { HeaderComponent } from './common/header/header.component';
import { ProjectsComponent } from './public/projects/projects.component';
import { SingleProjectsComponent } from './public/projects/single-projects/single-projects.component';
import { FixImageUrlPipe } from './common/pippes/fix-image-url.pipe';
import { AuthHomeComponent } from './auth/home/auth-home/auth-home.component';
import {NgxWebstorageModule} from 'ngx-webstorage';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    FullBannerComponent,
    HeaderComponent,
    ProjectsComponent,
    SingleProjectsComponent,
    FixImageUrlPipe,
    AuthHomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),    
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
