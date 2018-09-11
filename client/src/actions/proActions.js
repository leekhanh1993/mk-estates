import axios from 'axios'
import { PROS_LOADING, GET_PROS, GET_PRO, DELETE_PRO, ADD_PRO } from './types'

export const setPROsLoading = () => {
    return {
        type: PROS_LOADING
    }
}
export const getPROs = () => dispatch => {
    dispatch(setPROsLoading());
    axios
        .get('http://localhost:5000/api/projects')
        .then(res => dispatch({
            type: GET_PROS,
            payload: res.data
        }))
}

export const getPRO = id => dispatch => {
    axios
        .get(`http://localhost:5000/api/projects/${id}`)
        .then(res => dispatch({
            type: GET_PRO,
            payload: res.data
        }))
}

export const deletePRO = id => dispatch => {
    axios
        .delete(`http://localhost:5000/api/projects/${id}`)
        .then(() => dispatch({
            type: DELETE_PRO,
            payload: id
        }))
}

export const addPRO = pro => dispatch => {
    axios
        .post('http://localhost:5000/api/projects', pro)
        .then(res => dispatch({
            type: ADD_PRO,
            payload: res.data
        }))
}

export const editPRO = (updatedPRO, id) => dispatch => {
    axios
        .put(`http://localhost:5000/api/projects/${id}`, updatedPRO)
        .then(() => { getPROs() })
}