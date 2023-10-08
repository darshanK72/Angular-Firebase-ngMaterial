import { createAction, props } from "@ngrx/store";

export const addBlog = createAction("addBlog",props<{payload:any}>());
export const updateBlog = createAction("updateBlog",props<{payload:any}>());
export const deleteBlog = createAction("deleteBlog",props<{payload:any}>());