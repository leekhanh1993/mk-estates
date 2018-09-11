import { USERS_LOADING, GET_USERS, ADD_USER, DELETE_USER, GET_USER } from './types'
import axios from 'axios'

export const setUsersLoading = () => {
    return {
        type: USERS_LOADING
    }
}

export const getUsers = () => dispatch => {
    dispatch(setUsersLoading());
    axios
        .get('http://localhost:5000/api/users')
        .then(res => dispatch({
            type: GET_USERS,
            payload: res.data
        }))
}

export const getUser = (id) => dispatch => {
    axios
        .get(`http://localhost:5000/api/users/${id}`)
        .then(res => dispatch({
            type: GET_USER,
            payload: res.data
        }))
}

export const addUser = (user) => dispatch => {
    axios
        .post(`http://localhost:5000/api/users/`, user)
        .then(res => dispatch({
            type: ADD_USER,
            payload: res.data
        }))
}

export const deleteUser = (id) => dispatch => {
    axios
        .delete(`http://localhost:5000/api/users/${id}`)
        .then(() => dispatch({
            type: DELETE_USER,
            payload: id
        }))
}

export const editUser = (updatedUser, id) => dispatch => {
    axios
        .put(`http://localhost:5000/api/users/${id}`, updatedUser)
        .then(() => { getUsers() })
}