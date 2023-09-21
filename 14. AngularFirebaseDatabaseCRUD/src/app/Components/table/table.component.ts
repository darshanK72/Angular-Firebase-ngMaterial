import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from 'src/app/Models/Student';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  studentList!: Student[];
  filterText: string = 'all';
  totalStudents!: number;

  isInserting: boolean = false;
  isEditing: boolean = false;
  studentToEdit!: string;

  @ViewChild('myForm') myForm!: NgForm;

  constructor(private studentService: StudentService) {}

  getStudentGrade(grades?: number) {
    if (grades) {
      return grades;
    }
    return 1;
  }

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe((data: any) => {
      this.studentList = data.sort((a: Student, b: Student) =>
        a.rollNo > b.rollNo ? 1 : -1
      );
      this.totalStudents = this.studentList.length;
    });
  }

  onFormSubmit() {
    if (this.isInserting) {
      console.log(this.myForm.value.insertDetails);
      let student: Student = new Student(this.totalStudents+1);
      student.setStudent(this.myForm.value.insertDetails);
      let st = {...student };
      this.studentService
        .postStudent(st)
        .then((data) => {
          console.log(data);
          alert('Data inserted successfully !!');
          this.ngOnInit();
        })
        .catch((error) => {
          alert(error.message);
          console.log(error);
        });

      this.isInserting = false;
    } else if (this.isEditing) {
      console.log(this.myForm.value.editDetails);
      let student: Student = this.myForm.value.editDetails;
      this.studentService
        .putStudent(student, this.studentToEdit)
        .then((data) => {
          console.log(data);
          this.ngOnInit();
        })
        .catch((error) => {
          alert(error.message);
          console.log(error);
        });

      this.isEditing = false;
    } else {
      console.log(this.myForm.value);
    }
  }

  onInsertClicked() {
    this.isInserting = true;
    this.isEditing = false;
  }

  onInsertCancle() {
    this.isInserting = false;
  }

  onEditClicked(id: string) {
    this.isEditing = true;
    this.isInserting = false;
    this.studentToEdit = id;

    this.studentService
      .getStudent(id)
      .then((data) => {
        console.log(data);
        this.myForm.form.patchValue({
          editDetails: data,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  onEditCancled() {
    this.isEditing = false;
    this.studentToEdit = '';
  }

  onClickDelete(id: string) {
    this.studentService.deleteStudent(id).then((data)=>{
      console.log(data);
      this.ngOnInit();
    });
  }
}
