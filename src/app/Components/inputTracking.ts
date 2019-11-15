import { Component, AfterViewInit  } from "@angular/core";
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'input-reporter',
    template: `
    <div align="center">
    <br><br><br><br>
      <h1>Observe user input : Press some Key</h1>
      <br>
      <div><h1>{{pressedKey}}</h1></div>
      </div>
    `
})
export class inputTracking  {
    pressedKey = "";

    ngAfterViewInit (){
        let mouseWatcher = Observable.fromEvent(document, 'mouseup')
        .subscribe((e : MouseEvent) => {
            this.pressedKey = "You just pressed " + e.button;
        })
        let keyboardStream = Observable.fromEvent(document, 'keydown')
        .subscribe((e: KeyboardEvent) => {
          this.pressedKey = "You just pressed " + e.key + " Button";
        });

    }

    
}