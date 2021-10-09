import { all, fork } from 'redux-saga/effects';
import { photosWatcher, } from './photoSaga';

export function* rootWatcher() {
    yield all([
        fork(photosWatcher),
    ]);
};