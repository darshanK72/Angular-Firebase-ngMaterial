import { Injectable } from '@angular/core';
import { Student } from '../Models/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentList:Student[] = [
    new Student('John','Smith','Male',new Date(1997,11,12),'B.E. Mechanical',87.233220,1200),
    new Student('Mark','Vought','Male',new Date(1998,10,8),'B.Tech Computer Science',87.233220,1000),
    new Student('Seraha','King','Female',new Date(1997,11,12),'B.E. Electrical',92.51220,800),
    new Student('John', 'Smith', 'Male', new Date(1997, 11, 12), 'B.E. Mechanical', 87.233220, 1200),
    new Student('Jane', 'Doe', 'Female', new Date(1998, 5, 25), 'B.E. Computer Science', 92.541234, 1201),
    new Student('Michael', 'Johnson', 'Male', new Date(1996, 8, 3), 'B.E. Electrical', 78.123456, 1202),
    new Student('Sarah', 'Brown', 'Female', new Date(1999, 2, 17), 'B.E. Civil', 85.678901, 1203),
    new Student('David', 'Williams', 'Male', new Date(1995, 1, 8), 'B.E. Chemical', 90.987654, 1204),
    new Student('Jessica', 'Lee', 'Female', new Date(1997, 6, 30), 'B.E. Aerospace', 88.345678, 1205),
    new Student('Christopher', 'Taylor', 'Male', new Date(1998, 9, 11), 'B.E. Biomedical', 76.789012, 1206),
    new Student('Emily', 'Smith', 'Female', new Date(1997, 12, 28), 'B.E. Industrial', 93.456789, 1207),
    new Student('Matthew', 'Brown', 'Male', new Date(1996, 3, 14), 'B.E. Mechanical', 81.234567, 1208),
    new Student('Olivia', 'Johnson', 'Female', new Date(1998, 7, 22), 'B.E. Computer Science', 89.012345, 1209),
    new Student('Merry','Jane','Female',new Date(1991,6,7),'B.SC',85.60,2100),
    new Student('Steve','Smith','Male',new Date(1994,3,21),'M.Com',57.6342,900),
    new Student('John','Doe','Male',new Date(2000,12,7),'B.E. Electronics',62.6523,2200),
    new Student('Angilo','Mathues','Female',new Date(1997,5,19),'B.E. Biotechnology',81.00,200),
    new Student('John','Walter','Male',new Date(1992,7,3),'B.E. Mechanical',94.1242,700),
  ];

  constructor() { }

  getAllStudents(){
    return this.studentList;
  }

  getStudent(rollNo:number){
    return this.studentList.find(st => st.rollNo == rollNo);
  }

}
