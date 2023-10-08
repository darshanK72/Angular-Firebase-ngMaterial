import {createFeatureSelector, createSelector} from '@ngrx/store';
import { Counter } from 'src/app/Models/counter';

const selectorState = createFeatureSelector<Counter>('counter');

export const count = createSelector(selectorState,(state) => {
    return state.count
})

