import { GET_GALLERIES, GET_GALLERYITEM, CLEAR_GALLERYITEM, GALLERY_COUNTER } from '../actions/types';


const initialState = {
    galleries: [],
    

}
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_GALLERIES:
            return {
                ...state,
                galleries : action.payload
            }

        case GET_GALLERYITEM:
            return {
                ...state,
                galleries : [action.payload]
            }

        case CLEAR_GALLERYITEM:
            return {
                ...state,
                galleries : action.payload
            }
        
        case GALLERY_COUNTER:
            return {
                ...state,
                galleries : [action.payload]
            }

        default:
            return state
    }
}