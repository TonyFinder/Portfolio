import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {AppActionTypes, appReducer} from './appReducer';

let rootReducer = combineReducers({
    app: appReducer,
})

export let store = createStore(rootReducer, applyMiddleware(thunk))

export const useCustomSelector: TypedUseSelectorHook<AppStateRootType> = useSelector
export const useAppDispatch = () => useDispatch<ThunkDispatch<AppStateRootType, unknown, RootActionTypes>>()

// types
export type AppStateRootType = ReturnType<typeof rootReducer>
export type RootActionTypes = AppActionTypes

// https://redux.js.org/usage/usage-with-typescript
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateRootType, unknown, RootActionTypes>

// @ts-ignore
window.store = store