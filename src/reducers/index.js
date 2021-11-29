import { combineReducers } from 'redux';

import posts from './posts';
import form from './form';
import currentId from './currentId';

export const reducers = combineReducers({ posts, form, currentId});