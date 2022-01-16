import {loadingReducer} from './loadingReducer'
import {combineReducers, createStore} from "redux";
import {styleReducer} from "./styleReducer";

const reducers = combineReducers({
    loading: loadingReducer,
    style: styleReducer
})

const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
