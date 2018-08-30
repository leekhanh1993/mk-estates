import {combineReducers} from 'redux'
import advertisementReducer from './advertisementReducer'
import projectReducer from './projectReducer'
import getADReducer from './getADReducer'
import getPROReducer from './getPROReducer'
import userReducer from './userReducer';
import getUserReducer from './getUserReducer';

export default combineReducers({
    ads: advertisementReducer,
    ad: getADReducer,
    pros: projectReducer,
    pro: getPROReducer,
    users: userReducer,
    user: getUserReducer
})