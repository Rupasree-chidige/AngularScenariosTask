import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Scenario6';
  public name ="";
  public sendData($event:string)
  {
    this.name=$event;
  }
}
