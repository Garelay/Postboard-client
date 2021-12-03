import { combineReducers } from 'redux'

import posts from './posts'
import form from './form'
import currentId from './currentId'
import modal from "./modal"

export const reducers = combineReducers({ posts, form, currentId, modal})