import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../Models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseURL = 'http://localhost:3000/posts';

  constructor(private http:HttpClient) { }


  getAllPosts():Observable<Post[]>{
    return this.http.get<Post[]>(`${this.baseURL}`);
  }

  getPostById(id:number):Observable<Post>{
    return this.http.get<Post>(`${this.baseURL}/${id}`);
  }

  addPost(post:Post):Observable<Post>{
    return this.http.post<Post>(`${this.baseURL}`,post);
  }

  updatePost(post:Post):Observable<Post>{
    return this.http.put<Post>(`${this.baseURL}/${post.id}`,post);
  }

  deletePost(id:number):Observable<Post>{
    let o = this.http.delete<Post>(`${this.baseURL}/${id}`);
    // o.subscribe(data => {console.log(data)});
    return o;
  }
}
