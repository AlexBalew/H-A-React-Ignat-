import {loadingReducer} from './loadingReducer'
import {applyMiddleware, combineReducers, createStore} from "redux";
import {themeReducer} from "../../h12/bll/themeReducer";
import {status13Reducer} from "../../h13/HW13reducer";
import thunk from 'redux-thunk';

const reducers = combineReducers({
    loading: loadingReducer,
    themes: themeReducer,
    status: status13Reducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
