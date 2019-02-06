import {GET_LATEST, GET_OTHERNEWS, GET_GALLERIES} from './types';
import axios from 'axios';

const SERVER_API = 'http://localhost:3004';

export const getLatest = () => dispatch => {
    axios.get(`${SERVER_API}/articles/?_order=desc&_end=3`)
    .then(res => {
        //console.log('actions:', res.data)
        return dispatch({type: GET_LATEST, payload: res.data})
        }    
    );    
}

export const getOtherNews = () => dispatch => {
    axios.get(`${SERVER_API}/articles/?_order=desc&_start=3&_end=10`)
    .then(res => {
        //console.log('actions:', res.data)
        return dispatch({type: GET_OTHERNEWS, payload: res.data})
        }    
    );    
}


export const getGalleries = () => dispatch => {
    axios.get(`${SERVER_API}/galleries`)
    .then(res => {
        //console.log('actions:', res.data)
        return dispatch({type: GET_GALLERIES, payload: res.data})
        }    
    );    
}
