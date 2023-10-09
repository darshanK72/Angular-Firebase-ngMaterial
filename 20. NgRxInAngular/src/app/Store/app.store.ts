import { blogReducer } from "./blog/blog.reducer";
import { counterReducer } from "./counter/counter.reducer";
import { postReducer } from "./post/post.reducer";

export const AppStore = {
    counter:counterReducer,
    blogs:blogReducer,
    posts:postReducer
}