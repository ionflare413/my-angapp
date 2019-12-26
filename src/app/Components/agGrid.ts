import { Component, Injectable, AfterViewInit } from '@angular/core';
import { AllCommunityModules } from '@ag-grid-community/all-modules';
import { of } from 'rxjs';
import { fromEvent } from 'rxjs';
import { first } from 'rxjs/operators';
import { throttleTime, map, scan } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import { Subject, from } from 'rxjs';

@Component({
  selector: 'ag-grid-basic',
  template: `
    <div align="center">
    <br><br><br><br>
    <h1>Test ag-Grid</h1>
    <ag-grid-angular style="width: 800px; height: 500px;" class="ag-theme-balham" [rowData]="rowData"
        [columnDefs]="columnDefs" [modules]="modules">
    </ag-grid-angular>
    </div>
    `,
  styleUrls: []
})
export class agGridComponent {


  ngAfterViewInit() {



    const subject = new Subject<number>();

    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`)
    });
    subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`)
    });

    const observable = from([1, 2, 3]);

    observable.subscribe(subject); // You can subscribe providing a Subject





    //map<any,any>(x=> x * x)(of(1, 2, 3)).subscribe((v) => console.log(`value: ${v}`));
    /*
    const observable = new Observable(function subscribe(subscriber) {
      const id = setInterval(() => {
        subscriber.next('hi')
      }, 1000);
    });
    observable.subscribe(x => console.log(x));
    */
    /*
    const observable = new Observable(subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });

    console.log('just before subscribe');
    observable.subscribe({
      next(x) { console.log('got value ' + x); },
      error(err) { console.error('something wrong occurred: ' + err); },
      complete() { console.log('done'); }
    });
    console.log('just after subscribe');
    */
  }



  columnDefs = [
    { headerName: 'Make', field: 'make', sortable: true, filter: true },
    { headerName: 'Model', field: 'model', sortable: true, filter: true },
    { headerName: 'Price', field: 'price', sortable: true, filter: true }
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

  /*
   mouseWatcher = fromEvent(document, 'click').pipe(scan(count => count + 1, 0))
   .subscribe(count => console.log(`Clicked ${count} times`));
 */
  /*

      count = 0;
      rate = 1000;
      lastClick = Date.now() - this.rate;
      mouseWatcher = document.addEventListener('click', () => {
       if (Date.now() - this.lastClick >= this.rate) {
         console.log(`Clicked ${++this.count} times`);
         this.lastClick = Date.now();
       }
     });
     */

  mouseWatcher = fromEvent<number>(document, 'click')
    .pipe(
      throttleTime(1000),
      scan(count => count + 1, 0)
    )
    .subscribe(count => console.log(`Clicked ${count} times`));

  /*
  observable.subscribe({
    next(x) { console.log('got value ' + x); },
    error(err) { console.error('something wrong occurred: ' + err); },
    complete() { console.log('done'); }
  });
  console.log('just after subscribe');
  */
  /*
  mouseWatcher = fromEvent<MouseEvent>(document, 'click')
    .pipe(
      throttleTime(1000),
      //map(m => ({ x: m.clientX , y:m.clientY }))
      map(event => event.clientX),
      scan((count, clientX) => count + clientX, 0)
    )
    .subscribe(count => console.log(count));
  */
  modules = AllCommunityModules;
}