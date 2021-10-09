import { put, takeLatest, takeEvery, call, StrictEffect } from 'redux-saga/effects';
import { FETCH_PHOTOS, setPhotos } from '../redux/photoReducer';


const AccessKey = 'uufg7obR7_dRL8KENcvcef1RWpHpJM19YUz71hWqZ-s';
async function fetchPhotosFromApi(num: number) {
    const request = await fetch(`https://api.unsplash.com/photos?page=${num}&per_page=30&client_id=` + AccessKey);
    const data = await request.json();
    return data;
};

export function* photosWatcher(): any {
    yield takeEvery(FETCH_PHOTOS, fetchPhotosWorker);
}

export function* fetchPhotosWorker(): Generator<StrictEffect> {
    const data_1: any = yield call(fetchPhotosFromApi, 1);
    const data_2: any = yield call(fetchPhotosFromApi, 3);
    const json = data_1.concat(data_2);
    yield put(setPhotos(json));
}

