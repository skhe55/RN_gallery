
const initialState = {
    photos: [],
    favor: [],
};
// constants
export const FETCH_PHOTOS = 'FETCH_PHOTOS';
export const SET_PHOTOS = 'SET_PHOTOS';
export const LIKE_PHOTO = 'LIKE_PHOTO';
export const DELETE_PHOTO = 'DELETE_PHOTO';

export default function photosReducer(state = initialState, action: any) {
    switch (action.type) {
        case SET_PHOTOS:
            return {
                ...state,
                photos:
                    [
                        ...state.photos,
                        ...action.payload
                    ]
            }
        case LIKE_PHOTO:
            return {
                ...state,
                photos: state.photos.map((el: any) => {
                    if (el.id === action.payload) {
                        el['likeExist'] = true;
                        return el;
                    } else {
                        return el;
                    }
                }),
                favor: state.favor.concat(state.photos.filter((i: any) => i.id === action.payload)),
            }
        case DELETE_PHOTO:
            return {
                ...state,
                photos: state.photos.map((el: any) => {
                    if (el.id === action.payload) {
                        el['likeExist'] = false;
                        return el;
                    } else {
                        return el;
                    }
                }),
                favor: state.favor.filter((i: any) => i.id !== action.payload),
            }
        default:
            return state;
    }
};

// actions
export const setPhotos = (payload: any) => ({ type: SET_PHOTOS, payload });
export const fetchPhotos = () => ({ type: FETCH_PHOTOS });
export const setLikePhoto = (payload: any) => ({ type: LIKE_PHOTO, payload });
export const setDelPhoto = (payload: any) => ({ type: DELETE_PHOTO, payload });