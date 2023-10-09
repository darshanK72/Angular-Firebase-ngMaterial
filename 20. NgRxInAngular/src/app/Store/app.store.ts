import { blogReducer } from "./blog/blog.reducer";
import { counterReducer } from "./counter/counter.reducer";
import { postReducer } from "./post/post.reducer";
import {routerReducer} from '@ngrx/router-store';

export const AppStore = {
    counter:counterReducer,
    blogs:blogReducer,
    posts:postReducer,
    route:routerReducer
}