import { createReducer, on } from '@ngrx/store';
import { addBlog, deleteBlog, updateBlog } from './blog.actions';
import { state } from './blog.state';

export const blogReducer = createReducer(
  state,
  on(addBlog, (state,action) => {
    return [
        ...state,
        action.payload
    ]
  }),
  on(updateBlog, (state, action) => {
    return state.map((blog) =>
      blog.id == action.payload.id ? { ...action.payload } : blog
    );
  }),
  on(deleteBlog, (state, action) => {
    return state.filter((blog) => blog.id != action.payload.id);
  })
);
