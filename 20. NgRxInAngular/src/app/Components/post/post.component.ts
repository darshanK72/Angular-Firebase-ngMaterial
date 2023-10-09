import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { find, Observable, toArray } from 'rxjs';
import { Post } from 'src/app/Models/post';
import { PostService } from 'src/app/Services/post.service';
import { AppState } from 'src/app/Store/app.state';
import {
  addPost,
  deletePost,
  getPosts,
  updatePost,
} from 'src/app/Store/post/post.actions';
import { posts } from 'src/app/Store/post/post.selectors';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  posts$!: Observable<Post[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(getPosts());
  }

  getPosts() {
    this.posts$ = this.store.select(posts);
  }

  getPost(id: number) {}

  addPost() {
    this.store.dispatch(
      addPost({
        payload: {
          userId: 1,
          id: 7,
          title: 'magnam facilis autem',
          body: 'dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas',
        },
      })
    );
  }

  updatePost() {
    this.store.dispatch(
      updatePost({
        payload: {
          userId: 1,
          id: 7,
          title: 'This is title',
          body: 'This is message',
        },
      })
    );
  }

  deletePost() {
    this.store.dispatch(
      deletePost({
        payload: {
          id: 7,
        },
      })
    );
  }
}
