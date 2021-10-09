import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import photosReducer from "./photoReducer";
import { rootWatcher } from "../redux-saga";
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    photosReducer,
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);