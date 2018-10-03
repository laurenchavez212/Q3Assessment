import { FETCH_CAMERAS_SUCCESS, FETCH_CAMERAS_FAILED, ADD_TO_CART, REMOVE_FROM_CART } from './actions'

let initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CAMERAS_SUCCESS:
            return action.payload
        case FETCH_CAMERAS_FAILED:
            return action.payload
        case ADD_TO_CART:
            return state.map(camera => {
                if (camera.id == action.payload) {
                    camera.inCart = true
                }
                return camera
            })
        case REMOVE_FROM_CART:
            return state.map(camera => {
                if (camera.id == action.payload) {
                    camera.inCart = false
                }
                return camera
            })
        default:
            return state
    }
}