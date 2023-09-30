import { Component, OnInit } from '@angular/core';
import { getTodo } from 'src/app/Utilities/getTodo';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  todos:any;

  ngOnInit(){
    this.todos = getTodo();
  }


}
