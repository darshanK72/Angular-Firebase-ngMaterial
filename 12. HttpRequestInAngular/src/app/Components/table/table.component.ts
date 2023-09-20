import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  totalStudents!:number;

  isInserting:boolean = false;
  isEditing:boolean = false;
  studentToEdit!:number;

  @ViewChild('myForm') myForm!:NgForm;

  constructor(private studentService:StudentService){}

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe((data:any)=>{
      this.studentList = data;
      this.totalStudents = this.studentList.length;
    });

  }

  onFormSubmit(){
    if(this.isInserting){
      console.log(this.myForm.value.insertDetails);
      let student:Student = this.myForm.value.insertDetails;
      this.studentService.postStudent(student).subscribe((data) => {
        console.log(data);
        this.ngOnInit();
      });
      this.isInserting = false
    }
    else if(this.isEditing){
      console.log(this.myForm.value.editDetails);
      let student:Student = this.myForm.value.editDetails;
      this.studentService.putStudent(student).subscribe((data) => {
        console.log(data);
        this.ngOnInit();
      });
      this.isEditing = false;
    }
    else{
      console.log(this.myForm.value);
    }
  }

  onInsertClicked(){
    this.isInserting = true;
    this.isEditing = false;
  }

  onInsertCancle(){
    this.isInserting = false;
  }

  onEditClicked(id:number){
    this.isEditing = true;
    this.isInserting = false;
    this.studentToEdit = id;
    let student:Student;
    this.studentService.getStudent(this.studentToEdit).subscribe((data:any)=>{
      student = data;
      console.log(data);
      this.myForm.form.patchValue({
        'editDetails':student
      });
    });
  }

  onEditCancled(){
    this.isEditing = false;
    this.studentToEdit = -1;
  }

  onClickDelete(id:number){
    this.studentService.deleteStudent(id).subscribe((data) => {
      console.log(data);
      this.ngOnInit();
    })
  }
}
