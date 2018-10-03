import axios from 'axios'

export const FETCH_CAMERAS_SUCCESS = "FETCH_CAMERAS_SUCCESS"
export const FETCH_CAMERAS_FAILED = "FETCH_CAMERAS_FAILED"

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const fetchCameras = () => {
    return dispatch => {
        axios
            .get("http://localhost:8082/api/cameras")
            .then(response => dispatch({
                type: FETCH_CAMERAS_SUCCESS,
                payload: response.data
            }))
            .catch(err => dispatch({
                type: FETCH_CAMERAS_FAILED,
                payload: err
            }))
    }
}

export const addToCart = (id) => {
    return dispatch => {
        dispatch({
            type: ADD_TO_CART,
            payload: id
        })
    }
}

export const removeFromCart = (id) => {
    return dispatch => {
        dispatch({
            type: REMOVE_FROM_CART,
            payload: id
        })
    }
}