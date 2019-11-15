import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';

import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IntroComponent } from './intro/intro.component';
import { FooterComponent } from './footer/footer.component';
import { ShowCaseComponent } from './showcase/showcase.component';
import { AboutUsComponent } from './aboutUs/aboutUs.component';
import { Q2Component } from './q2/q2.component';


import { mdbPlayGround } from './Components/mdbPlayGround';
import { inputTracking } from './Components/inputTracking';
import { timeWatcher } from './Components/timeWatcher';
import { reqTestComponent } from './Components/reqtest.component';
import { pageNotFound } from './Components/pageNotFound';


import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { NgwWowModule } from 'ngx-wow';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { HttpClientModule } from '@angular/common/http';


const appRoutes: Routes = [
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'playground', component: mdbPlayGround },
  { path: 'it', component: inputTracking },
  { path: 'tw', component: timeWatcher },
  { path: 'rq', component: reqTestComponent },
  { path: '', component: IntroComponent },
  { path: '**', component: pageNotFound }

];

@NgModule({
  declarations: [
    Q2Component,
    AppComponent,
    IntroComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    ShowCaseComponent,
    AboutUsComponent,
    inputTracking,
    pageNotFound,
    timeWatcher,
    reqTestComponent,
    mdbPlayGround
  ],
  imports: [
    NgwWowModule,
    BrowserModule,
    TooltipModule.forRoot(),
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    //MatProgressSpinnerModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { //useHash: true, 
        //enableTracing: true 
      } // <-- debugging purposes only
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
