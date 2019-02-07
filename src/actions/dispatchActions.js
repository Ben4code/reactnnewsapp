import {GET_LATEST, GET_OTHERNEWS, GET_GALLERIES, 
    GET_GALLERYITEM, GET_NEWS, CLEAR_NEWS, 
    CLEAR_GALLERYITEM, NEWS_COUNTER, GALLERY_COUNTER} from './types';
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


export const getNews = (id) => dispatch => {
    axios.get(`${SERVER_API}/articles/${id}`)
    .then(res => {
        //console.log('actions:', res.data)
        return dispatch({type: GET_NEWS, payload: res.data})
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

export const getGalleryItem = (id) => dispatch => {
    axios.get(`${SERVER_API}/galleries/${id}`)
    .then(res => {
        //console.log('actions:', res.data)
        return dispatch({type: GET_GALLERYITEM, payload: res.data})
        }    
    );    
}

export const clearNews = () => dispatch => {
    return dispatch({type: CLEAR_NEWS, payload: []})
}

export const clearGalleryItem = () => dispatch => {
    return dispatch({type: CLEAR_GALLERYITEM, payload: []})
}


export const newsCounter = (id, array) => dispatch => {
    axios.patch(`${SERVER_API}/articles/${id}`, {likes: array})
    .then(res => {
        //console.log('actions:', res.data)
        return dispatch({type: NEWS_COUNTER, payload: res.data})
        }    
    );    
}

export const galleryCounter = (id, array) => dispatch => {
    axios.patch(`${SERVER_API}/galleries/${id}`, {likes: array})
    .then(res => {
        //console.log('actions:', res.data)
        return dispatch({type: GALLERY_COUNTER, payload: res.data})
        }    
    );    
}