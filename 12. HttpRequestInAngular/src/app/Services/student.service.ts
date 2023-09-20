import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../Models/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl = "http://localhost:3000";

  constructor(private http:HttpClient) { }

  getAllStudents(){
    return this.http.get(`${this.baseUrl}/students`);
  }

  getStudent(id:number){
    return this.http.get(`${this.baseUrl}/students/${id}`);
  }

  postStudent(student:Student){
    return this.http.post(`${this.baseUrl}/students`,student);
  }

  putStudent(student:Student){
    return this.http.put(`${this.baseUrl}/students/${student.id}`,student);
  }

  deleteStudent(id:number){
    return this.http.delete(`${this.baseUrl}/students/${id}`);
  }

}
