import axios from 'axios'
import { GET_ADS, DELETE_AD, ADD_AD, ADS_LOADING,GET_AD } from './types'

export const getADs = () => dispatch => {
    dispatch(setAdsLoading());
    axios
    .get('http://localhost:5000/api/advertisements')
    .then(res => dispatch({
        type: GET_ADS,
        payload: res.data
    }))
}
export const getAD = (id) => dispatch => {
    axios
    .get(`http://localhost:5000/api/advertisements/${id}`)
    .then(res => {
        dispatch({
            type: GET_AD,
            payload: res.data
        })
    })
}
export const deleteAD = id => dispatch => {
    axios.delete(`http://localhost:5000/api/advertisements/${id}`)
    .then(res => dispatch({
        type: DELETE_AD,
        payload: id
    }))
   
}
export const addAD = ad => dispatch => {
    axios
    .post('http://localhost:5000/api/advertisements', ad)
    .then(res => dispatch({
        type: ADD_AD,
        payload: res.data
    }))
}
export const editAD = (updatedAD, id) => dispatch => {
    axios
    .put(`http://localhost:5000/api/advertisements/${id}`, updatedAD)
    .then(() => {getADs()})
}
export const setAdsLoading = () => {
    return{
        type: ADS_LOADING
    }
}