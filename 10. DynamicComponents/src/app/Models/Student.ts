export class Student{
    static count:number = 0;
    rollNo : number;
    firstName:string;
    lastName:string;
    gender:string;
    dateOfBirth:Date;
    course:string;
    grades:number;
    examFees:number;

    constructor(firstName:string,lastName:string,gender:string,dateOfBirth:Date,course:string,grades:number,examFees:number){
        this.rollNo = ++Student.count;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.dateOfBirth = dateOfBirth;
        this.course = course;
        this.grades = grades;
        this.examFees = examFees;
    }

}