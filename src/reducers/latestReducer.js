import { GET_LATEST, GET_OTHERNEWS } from '../actions/types';


const initialState = {
    latest: [],
    otherNews: []

}
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_LATEST:
            return {
                ...state,
                latest : action.payload
            }

        case GET_OTHERNEWS:
            return {
                ...state,
                otherNews : action.payload
            }

        default:
            return state
    }
}