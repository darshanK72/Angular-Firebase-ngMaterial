import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Post } from "src/app/Models/post";


const selectorState = createFeatureSelector<Post[]>('posts');

export const posts = createSelector(selectorState,(state) => {
    return state;
})