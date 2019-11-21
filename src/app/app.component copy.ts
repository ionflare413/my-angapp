import { Component, AfterViewInit } from '@angular/core';
//import { WOW } from 'node_modules/wowjs/dist/wow.min.js';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements AfterViewInit {
  title = 'my-app';
  ngAfterViewInit() {

  }
  constructor(private wowService: NgwWowService) {
    this.wowService.init();
  }

}
