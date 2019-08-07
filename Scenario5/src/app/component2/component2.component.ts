import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component {
  @Output() public childEvent=new EventEmitter();
  public fireEvent($event:string){
  
    this.childEvent.emit($event);
  }
}
