import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from 'src/app/Models/Student';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent implements OnInit{

  @Input()
  studentToDelete!:Student;

  @Output()
  choiceEventEmmiter:EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
    console.log(this.studentToDelete);
  }

  ok(){
    this.choiceEventEmmiter.emit(true);
  }

  cancle(){
    this.choiceEventEmmiter.emit(false);
  }


}
