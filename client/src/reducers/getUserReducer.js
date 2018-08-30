import { GET_USER } from './../actions/types'

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            var newUser = state
            newUser = action.payload
            return newUser
        default:
            return state;
    }
}