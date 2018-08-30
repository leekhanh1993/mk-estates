import {compose, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import mainReducer from './reducers/index'

const intialState = {};

const middleware = [thunk];

const store = createStore(mainReducer, intialState, compose(applyMiddleware(...middleware), 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store;