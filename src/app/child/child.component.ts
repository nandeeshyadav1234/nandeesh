import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  @Output() messageEvent = new EventEmitter<string>();
  btnCount = 4;

  ngOnInit() {
  }

  closeFirst(id)
  {
    // console.log('first button clicked');
    this.messageEvent.emit(id)
  }
}
