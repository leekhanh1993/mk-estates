import {compose, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import mainReducer from './reducers/index'

const intialState = {};

const middleware = [thunk];

const store = createStore(mainReducer, intialState, compose(applyMiddleware(...middleware)))

export default store;