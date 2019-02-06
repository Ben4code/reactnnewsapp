import { combineReducers } from 'redux';
import  latestReducer  from './latestReducer';
import galleryReducer from './galleryReducer';

export default combineReducers ({
    articles: latestReducer,
    galleries1: galleryReducer
})

