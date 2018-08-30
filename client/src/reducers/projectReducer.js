import { GET_PROS, ADD_PRO, DELETE_PRO, PROS_LOADING, } from '../actions/types'

const initialState = {
    pros: [],
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PROS:
            return {
                ...state,
                pros: action.payload,
                loading: false
            }
        case ADD_PRO:
            return {
                ...state,
                pros: [action.payload, ...state.pros]
            }
        case DELETE_PRO:
            return {
                ...state,
                pros: state.pros.filter(pro => pro._id !== action.payload)
            }
        case PROS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}