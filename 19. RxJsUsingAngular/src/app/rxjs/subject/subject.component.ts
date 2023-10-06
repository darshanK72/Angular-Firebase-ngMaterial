import { Component, OnDestroy, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/Services/subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit,OnDestroy{

  constructor(private subjectService:SubjectService){}

  ngOnInit(): void {
    this.subjectService.mySubject.next(true);
  }

  ngOnDestroy(): void {
    this.subjectService.mySubject.next(false);
  }

}
