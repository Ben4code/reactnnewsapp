import { GET_GALLERIES } from '../actions/types';


const initialState = {
    galleries2: [],
    

}
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_GALLERIES:
            return {
                ...state,
                galleries2 : action.payload
            }

       
        default:
            return state
    }
}