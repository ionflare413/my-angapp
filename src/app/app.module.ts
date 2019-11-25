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





//=======[***Playground***]=======
import { agGridComponent } from './Components/agGrid';
import { mdbPlayGround } from './Components/mdbPlayGround';
import { inputTracking } from './Components/inputTracking';
import { timeWatcher } from './Components/timeWatcher';
import { reqTestComponent } from './Components/reqtest.component';
import { pageNotFound } from './Components/pageNotFound';
import { Q2Component } from './q2/q2.component';

//=======[***UserManagement***]=======
import { UserRegisterComponent } from './user/register/user.register.component';
import { UserListComponent } from './user/list/user.list.component';

import { DatePipe } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatFormFieldModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';

import { NgwWowModule } from 'ngx-wow';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from '@ag-grid-community/angular';


const appRoutes: Routes = [
  { path: 'aboutUs', component: AboutUsComponent },

  { path: 'pg/mdb', component: mdbPlayGround },
  { path: 'pg/it', component: inputTracking },
  { path: 'pg/tw', component: timeWatcher },
  { path: 'pg/rq', component: reqTestComponent },
  { path: 'pg/ag', component: agGridComponent },

  { path: '', component: IntroComponent },
  { path: 'user/register', component: UserRegisterComponent },
  { path: 'user/list', component: UserListComponent },
  { path: '**', component: pageNotFound }

];

@NgModule({
  declarations: [
    agGridComponent,
    UserListComponent,
    UserRegisterComponent,
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
    AgGridModule.withComponents([]),

    MDBBootstrapModule.forRoot(),

    //===[***angular material***]
    MatDatepickerModule, //Because datepicker from MDBootstrap needed to be paid
    MatNativeDateModule, 
    MatFormFieldModule,
    

    RouterModule.forRoot(
      appRoutes,
      { //useHash: true, 
        //enableTracing: true 
      } // <-- debugging purposes only
    )

  ],
  providers: [MatDatepickerModule, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
