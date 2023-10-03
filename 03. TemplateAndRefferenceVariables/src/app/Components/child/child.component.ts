import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  variable:boolean = false;

  weekdays:string[] = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

  toggle(){
    this.variable = !this.variable;
  }

}
