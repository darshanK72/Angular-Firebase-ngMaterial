import { createReducer, on } from '@ngrx/store';
import { addPostSuccess, deletePostSuccess, getPostsSuccess, updatePostSuccess } from './post.actions';
import { state } from './post.state';

export const postReducer = createReducer(
  state,
  on(getPostsSuccess, (state, action) => {
    return [...action.payload];
  }),
  on(addPostSuccess,(state,action) => {
    return [...state,action.payload]
  }),
  on(updatePostSuccess,(state,action) => {
    return [...state.filter(p => p.id != action.payload.id),action.payload]
  }),
  on(deletePostSuccess,(state,action) => {
    return [...state.filter(p => p.id != action.payload.id)]
  })
);
