import { GET_LATEST, GET_OTHERNEWS, GET_NEWS, CLEAR_NEWS } from '../actions/types';


const initialState = {
    latest: [],
    otherNews: [],
    news: []
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
        
        case GET_NEWS:
            return {
                ...state,
                news : [action.payload]
            }

        case CLEAR_NEWS:
            return {
                ...state,
                news : action.payload
            }
        
        default:
            return state
    }
}