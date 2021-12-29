import { combineReducers } from 'redux'

import posts from './posts'
import currentId from './currentId'
import modal from "./modal"
import user from "./user"

export const reducers = combineReducers({ posts, currentId, modal, user })