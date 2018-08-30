import { GET_PRO } from '../actions/types'

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PRO:
            var newState = state;
            newState = action.payload
            return newState;
        default:
            return state;
    }
}