import { createAction, props } from "@ngrx/store";

export const getPosts = createAction("getPosts");
export const getPostsSuccess = createAction("getPostsSuccess",props<{payload:any}>());

export const addPost = createAction("addPost",props<{payload:any}>());
export const addPostSuccess = createAction("addPostSuccess",props<{payload:any}>());

export const updatePost = createAction("updatePost",props<{payload:any}>());
export const updatePostSuccess = createAction("updatePostSuccess",props<{payload:any}>());

export const deletePost = createAction("deletePost",props<{payload:any}>());
export const deletePostSuccess = createAction("deletePostSuccess",props<{payload:any}>());