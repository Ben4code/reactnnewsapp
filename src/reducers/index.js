import { combineReducers } from 'redux';
import  articlesReducer  from './articlesReducer';
import galleryReducer from './galleryReducer';

export default combineReducers ({
    articles: articlesReducer,
    galleries: galleryReducer
})

