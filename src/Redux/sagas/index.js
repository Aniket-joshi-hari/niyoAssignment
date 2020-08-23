import { takeLatest, all } from 'redux-saga/effects';

import { homesaga, movieDetailssaga } from './home';

function* actionWatcher() {
    yield takeLatest('HOME_DATA_REQUEST', homesaga)
    yield takeLatest('GET_MOVIE_BY_ID_REQUEST', movieDetailssaga)
}

export default function* rootSaga() {
    yield all([
        actionWatcher()
    ]);


}