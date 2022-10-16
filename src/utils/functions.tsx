import {RootActionTypes} from '../bll/main/store';
import {addNotification} from '../bll/main/appReducer';
import {Dispatch} from 'redux';
import {v1} from 'uuid';

export const showError = (error: string, dispatch: Dispatch<RootActionTypes>) => {
    dispatch(addNotification({
        type: "error",
        message: error,
        id: v1(),
    }))
}
export const showSuccess = (success: string, dispatch: Dispatch<RootActionTypes>) => {
    dispatch(addNotification({
        type: "success",
        message: success,
        id: v1(),
    }))
}