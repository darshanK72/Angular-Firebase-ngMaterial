import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addBlog, deleteBlog, updateBlog } from 'src/app/Store/blog/blog.actions';
import { blogs } from 'src/app/Store/blog/blog.selectors';
import { AppState } from 'src/app/Store/app.state';
import { Blog } from 'src/app/Models/Blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent{

  static count = 0;
  blogs!:Observable<Blog[]>;

  constructor(private store:Store<AppState>){}

  add(){
    this.store.dispatch(addBlog({
      payload: {
        id:++BlogComponent.count,
        title:'This is first blog title',
        discription:'This is discription of first title'
      }
    }))
  }

  show(){
    this.blogs = this.store.select(blogs);
  }

  update(){
    this.store.dispatch(updateBlog({
      payload:{
        id:1,
        title:'This is new Title',
        discription: 'this is new disctiption'
      }
    }))
  }

  delete(){
    this.store.dispatch(deleteBlog({
      payload:{
        id:1
      }
    }))
  }
}
