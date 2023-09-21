// export interface Student{
//     id : number;
//     firstName:string;
//     lastName:string;
//     gender:string;
//     dateOfBirth:string;
//     course:string;
//     grades:number;
//     examFees:number;

// }

export class Student{
    rollNo!: number;
    firstName?:string;
    lastName?:string;
    gender?:string;
    dateOfBirth?:string;
    course?:string;
    grades?:number;
    examFees?:number;
    id!:string;

    constructor(rollNo:number,firstName?:string,lastName?:string,gender?:string,dateOfBirth?:string,course?:string,grades?:number,examFees?:number){
        this.rollNo = rollNo;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.dateOfBirth = dateOfBirth;
        this.course = course;
        this.grades = grades;
        this.examFees = examFees;
    }

    setStudent(studentObj:any){
        this.firstName = studentObj.firstName;
        this.lastName = studentObj.lastName;
        this.gender = studentObj.gender;
        this.dateOfBirth = studentObj.dateOfBirth;
        this.course = studentObj.course;
        this.grades = studentObj.grades;
        this.examFees = studentObj.examFees;
    }

}