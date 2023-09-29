import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http:HttpClient) { }

  getAllTodos(){
    return this.http.get(`${this.baseUrl}`);
  }

  getTodoById(id:number){
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateTodo(id:number,todo:any){
    return this.http.put(`${this.baseUrl}/${id}`,todo);
  }
}
