import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Department } from '../Models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  allDepartments = [];

  constructor(private http:HttpClient) {}


  public getAllDepartments() : Observable<Department[]>{
    return this.http.get<Department[]>("https://localhost:7127/api/Departments")
    .pipe(map((response) => {
      let deparemtnts = [];
      for(const key in response){
        deparemtnts.push(response[key])
      }
      return deparemtnts;
    }))
  }
}
