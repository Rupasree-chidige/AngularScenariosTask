import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component {

  public name="";
  @Output() public childEvent=new EventEmitter();
  public display(){
   
    this.childEvent.emit(this.name);
  }
 


}
