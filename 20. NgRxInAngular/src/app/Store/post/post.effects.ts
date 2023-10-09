import { Injectable } from '@angular/core';
import { act, Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, exhaustMap, map, tap } from 'rxjs';
import { PostService } from 'src/app/Services/post.service';
import {
  addPost,
  addPostSuccess,
  deletePost,
  deletePostSuccess,
  getPosts,
  getPostsSuccess,
  updatePost,
  updatePostSuccess,
} from './post.actions';

@Injectable()
export class PostEffects {

  constructor(private actions$: Actions, private postService: PostService) {}

  getPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getPosts),
      exhaustMap(() =>
        this.postService.getAllPosts().pipe(
          map((posts) => getPostsSuccess({ payload: posts })),
          catchError(() => EMPTY)
        )
      )
    );
  });

  addPost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addPost),
      exhaustMap((action) =>
        this.postService.addPost(action.payload).pipe(
          map((post) => addPostSuccess({ payload: post })),
          catchError((error) => {
            console.log(error.message);
            return EMPTY;
          })
        )
      )
    );
  });

  updatePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updatePost),
      exhaustMap((action) =>
        this.postService.updatePost(action.payload).pipe(
          map((post) => updatePostSuccess({ payload: post })),
          catchError((error) => {
            console.log(error.message);
            return EMPTY;
          })
        )
      )
    );
  });

  deletePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deletePost),
      exhaustMap((action) =>
        this.postService.deletePost(action.payload.id).pipe(
          map(() => deletePostSuccess({ payload: action.payload})),
          catchError((error) => {
            console.log(error);
            return EMPTY;
          })
        )
      )
    );
  });
}
