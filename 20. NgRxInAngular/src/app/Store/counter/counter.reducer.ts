import { createReducer, on } from "@ngrx/store";
import { custom, decrement, increment, reset } from "./counter.actions";
import { state } from "./counter.state";

export const counterReducer = createReducer(state,
    on(increment,(state) => {
        return {
            ...state,
            count: state.count + 1
        }
    }),
    on(decrement,(state) => {
        return {
            ...state,
            count: state.count - 1
        }
    }),
    on(reset,(state) => {
        return {
            ...state,
            count: 0
        }
    }),
    on(custom,(state,action)=>{
        return {
            ...state,
            count:state.count + action.value
        }
    })
)