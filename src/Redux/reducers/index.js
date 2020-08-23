import { combineReducers } from 'redux';
import { HomeReducer, MovieDetailsReducer } from './home';
import { FavouriteReducer } from './favourite';

export default combineReducers({
    HomeReducer,
    FavouriteReducer,
    MovieDetailsReducer
});