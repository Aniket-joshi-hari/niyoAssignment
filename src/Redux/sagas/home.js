import { call, put } from 'redux-saga/effects'
import { HomePageApi, MovieDetailsAPI } from '../api/home';

export function* homesaga(action) {
    console.log('api call')
    try {
        const response = yield call(HomePageApi, action.data);

        yield put({ type: 'HOME_DATA_SUCCESS', data: response.data, error: response.errorMessage });
    } catch (e) {

        yield put({ type: 'HOME_DATA_FALIURE', error: e.message });
    }
}

export function* movieDetailssaga(action) {
    try {
        const response = yield call(MovieDetailsAPI, action.data);

        yield put({ type: 'GET_MOVIE_BY_ID_SUCCESS', data: response.data, error: response.errorMessage });
    } catch (e) {

        yield put({ type: 'GET_MOVIE_BY_ID_FAILURE', error: e.message });
    }
}