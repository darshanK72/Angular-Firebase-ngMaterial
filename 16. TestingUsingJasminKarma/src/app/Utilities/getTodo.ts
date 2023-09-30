import { TODOS } from "../Data/mock";

export function getTodo(){
    return TODOS.sort((a,b) => a.id - b.id);
}