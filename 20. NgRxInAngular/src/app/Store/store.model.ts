import { Blog } from "../Models/Blog";
import { Counter } from "../Models/counter";

export interface AppState{
    counter:Counter,
    blogs:Blog[]
}