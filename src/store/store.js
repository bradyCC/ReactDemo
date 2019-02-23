/**
 * Created by brady on 2019/1/19.
 */

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/index'

const defaultState = {}
const middleware = [thunk]

export const store = createStore(rootReducer, defaultState, applyMiddleware(...middleware))
