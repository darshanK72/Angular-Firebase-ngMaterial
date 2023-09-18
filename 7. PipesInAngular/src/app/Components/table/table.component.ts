import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Models/Student';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{

  studentList!:Student[];
  filterText:string = 'all';
  totalStudents:Promise<number> = new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve(this.studentList.length);
    }, 2000);
  })

  constructor(private studentService:StudentService){}

  ngOnInit(): void {
    this.studentList = this.studentService.getAllStudents();
  }

}
