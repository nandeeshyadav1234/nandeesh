import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';
  count = 4;
  message: any;

  receiveMessage($event) {
    this.message = $event;
    console.log("clicked");

    var queue = document.getElementById('mainDiv');
    var elements = queue.getElementsByClassName('mainDiv');
    queue.removeChild(elements[0]);

    // console.log("elements[0]",elements[0]);

    // var elements = document.getElementById('mainDiv').firstChild.remove();;
// queue.removeChild(elements[0]); 
  }
}
