import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {AppActionTypes, appReducer} from './appReducer';
import {GetInTouchActionTypes, getInTouchReducer} from '../features/sendMessage/getInTouchReducer';

let rootReducer = combineReducers({
    app: appReducer,
    getInTouch: getInTouchReducer,
})

export let store = createStore(rootReducer, applyMiddleware(thunk))

export const useCustomSelector: TypedUseSelectorHook<AppStateRootType> = useSelector
export const useAppDispatch = () => useDispatch<ThunkDispatch<AppStateRootType, unknown, RootActionTypes>>()

// types
export type AppStateRootType = ReturnType<typeof rootReducer>
export type RootActionTypes = AppActionTypes | GetInTouchActionTypes

// https://redux.js.org/usage/usage-with-typescript
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateRootType, unknown, RootActionTypes>

// @ts-ignore
window.store = store