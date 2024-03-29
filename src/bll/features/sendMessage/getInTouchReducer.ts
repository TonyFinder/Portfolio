import {FormDataType, formGetInTouchAPI} from '../../../dal/api-GetInTouch';
import {AppThunk} from '../../main/store';
import {changeSendingMessageStatus} from '../../main/appReducer';
import {SendingStatusType} from '../../../utils/enums';
import {showError, showSuccess} from '../../../utils/functions';

let initialState: GetInTouchStateType = {
    name: '',
    email: '',
    message: '',
}

export const getInTouchReducer = (state: GetInTouchStateType = initialState, action: GetInTouchActionTypes): GetInTouchStateType => {
    switch (action.type) {
        case 'GET-IN-TOUCH/CHANGE-DATA':
            return {...state, ...action.data}
        default:
            return state
    }
}

// actions
export const changeGetInTouchData = (data: GetInTouchStateType) => ({type: 'GET-IN-TOUCH/CHANGE-DATA', data} as const)

// thunks
export const sendMessageTC = (data: FormDataType): AppThunk => (dispatch) => {
    dispatch(changeSendingMessageStatus(SendingStatusType.active))
    formGetInTouchAPI.sendEmail(data)
        .then(() => {
            dispatch(changeGetInTouchData({name: '', email: '', message: ''}))
            showSuccess("Message has been sent", dispatch)
        })
        .catch(() => {
            showError("ERROR! Message has not been sent. Please try again later", dispatch)
        })
        .finally(() => dispatch(changeSendingMessageStatus(SendingStatusType.disabled)))
}

// types
export type GetInTouchActionTypes = ReturnType<typeof changeGetInTouchData>
export type GetInTouchStateType = {
    name: string
    email: string
    message: string
}
