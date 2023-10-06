import { Component, OnInit } from '@angular/core';
import { SubjectService } from './Services/subject.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  toShowMessage!:boolean;

  title = 'RxJsUsingAngular';

  constructor(private subjectService:SubjectService){}

  ngOnInit(){
    this.subjectService.mySubject.subscribe(val => {
      this.toShowMessage = val;
    })
  }
}
