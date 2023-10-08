import { blogReducer } from "./blog/blog.reducer";
import { counterReducer } from "./counter/counter.reducer";

export const AppStore = {
    counter:counterReducer,
    blogs:blogReducer
}