import { Component, Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from "@angular/http";

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { asapScheduler } from 'rxjs';


@Injectable()
@Component({
    selector: 'app-reqtest',
    template: `
    <div align="center">
     
      <br><br><br><br>
        Angular <=> Webservice <=> Database
      <br>
      Webservice : http://pure-reaches-24701.herokuapp.com/
      <br>
      Mysql : https://remotemysql.com/
      <br>
      <br>
      <h2>Generate Table</h2>
      <button (click)="getExAppMethod1()">Fire Req 1!</button>
      <button (click)="getExAppMethod2()">Fire Req 2!</button>
        <br>
        <br>
        <!--Table-->
        <table class="table table-striped w-auto">
        
          <!--Table head-->
          <thead *ngIf="products">
              <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>TYPE</th>
              </tr>
          </thead>
          <!--Table head-->
          <!--Table body-->
          <tbody>
              <tr class="table-info" *ngFor="let product of products">
                  <td>{{product.id}}</td>
                  <td>{{product.name}}</td>
                  <td>{{product.price}}</td>
                  <td>{{product.type}}</td>
              </tr>
          </tbody>
          <!--Table body--> 
        </table>
        <!--Table-->
    </div>
    `,
    styleUrls: []
})
export class reqTestComponent {
    constructor(private http: HttpClient) { }
    //URL = 'assets/test.json';
    products;
    getExAppMethod1() {
        this.http.get('http://pure-reaches-24701.herokuapp.com/getdata',
            {}).subscribe(response => {
                //成功時の処理
                console.log(response);
                this.products = response;
            }, error => {
                //失敗時の処理
                console.log(error);
            });
    }
    getExAppMethod2() {
        this.http.get('http://pure-reaches-24701.herokuapp.com/greeting',
            {}).subscribe(response => {
                //成功時の処理
                console.log(response);
            }, error => {
                //失敗時の処理
                console.log(error);
            });
    }
    /*
    isProdAvailable(): boolean {
        if(this.products)
        return 0;
    }
    */
}