import { Component, AfterViewInit  } from "@angular/core";
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'time-reporter',
    template: `
    <div align="center">
      <br><br><br><br>
      <h1>Observe Datetime Event : </h1> 
      <div><h1>{{time | async}}</h1></div>
      </div>
    `
})
export class timeWatcher  {
    
    time = Observable.create(observer => {
        setInterval(() =>  observer.next(new Date().toString()), 1000)
      });

    ngAfterViewInit (){
        /*
        let timeWatcher = this.time.subscribe(        
        );
        */
        /*
        let timeWatcher = Observable.fromEvent(document, 'mouseup')
        .subscribe((e : MouseEvent) => {
            this.pressedKey = "You just pressed " + e.button;
        })
        let keyboardStream = Observable.fromEvent(document, 'keydown')
        .subscribe((e: KeyboardEvent) => {
          this.pressedKey = "You just pressed " + e.key + " Button";
        });
        */
    }

    
}