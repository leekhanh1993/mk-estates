import { GET_AD } from './../actions/types'


const initialState = {}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_AD:
            var newState = state;
            newState = action.payload
            return newState;
        default:
            return state;
    }
}