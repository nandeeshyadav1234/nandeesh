import { Component, Output, EventEmitter, ElementRef, ViewChild, ApplicationRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';
  count = 4;
  message: any;
  noResult: boolean = true;
  @ViewChild('render') private nameInputRef: any;
  constructor(private renderer: Renderer2) {}
  receiveMessage(id) {
    if(id == 0)
    {
      
      // Method 1
      // var queue = document.getElementById('mainDiv');
      // var elements = queue.getElementsByClassName('mainDiv');
      // queue.removeChild(elements[0]);
      // if(elements.length == 1)
      //   this.noResult = false;

      //Method 2
      this.nameInputRef.nativeElement.children[0].remove();
      if(this.nameInputRef.nativeElement.children.length == 0)
      this.noResult = false;

      // Method 3 this is removing from last
      // this.count--;
      // if(this.count == 0)
      //   this.noResult = false;

    }
    else
    {
      return;
    }


  }
}
