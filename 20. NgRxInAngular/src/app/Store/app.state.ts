import { Blog } from "../Models/Blog";
import { Counter } from "../Models/counter";
import { Post } from "../Models/post";

export interface AppState{
    counter:Counter,
    blogs:Blog[],
    posts:Post[]
}