import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component {
  public name="";
  @Output() public childEvent=new EventEmitter();
  public display(){
    
    this.childEvent.emit(this.name);
  }
 

}
