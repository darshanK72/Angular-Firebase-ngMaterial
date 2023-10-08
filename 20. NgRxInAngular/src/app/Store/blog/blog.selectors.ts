import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Blog} from '../../Models/Blog';

const selectorState = createFeatureSelector<Blog[]>('blogs');

export const blogs = createSelector(selectorState,(state) => {
    return state;
})