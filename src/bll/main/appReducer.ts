import {SendingStatusType} from '../../utils/enums';

let initialState: AppInitialStateType = {
    page: 'all',
    showProfileItem: false,
    portfolioNumber: 0,
    sendingStatus: SendingStatusType.disabled,
}

export const appReducer = (state: AppInitialStateType = initialState, action: AppActionTypes): AppInitialStateType => {
    switch (action.type) {
        case 'APP/CURRENT-PAGE':
            return {...state, page: action.page}
        case 'APP/CURRENT-PORTFOLIO':
            return {...state, portfolioNumber: action.number}
        case 'APP/SHOW-PROFILE-ITEM':
            return {...state, showProfileItem: action.show}
        case 'APP/SET-SENDING-MESSAGE-STATUS':
            return {...state, sendingStatus: action.sendingStatus}
        default:
            return state
    }
}

// actions
export const changeCurrentPage = (page: PageType) => ({type: 'APP/CURRENT-PAGE', page} as const)
export const changePortfolioNumber = (number: number) => ({type: 'APP/CURRENT-PORTFOLIO', number} as const)
export const setShowProfileItem = (show: boolean) => ({type: 'APP/SHOW-PROFILE-ITEM', show} as const)
export const changeSendingMessageStatus = (sendingStatus: SendingStatusType) => ({type: 'APP/SET-SENDING-MESSAGE-STATUS', sendingStatus} as const)

// thunks

// types
export type AppActionTypes =
    | ReturnType<typeof changeCurrentPage>
    | ReturnType<typeof changePortfolioNumber>
    | ReturnType<typeof setShowProfileItem>
    | ReturnType<typeof changeSendingMessageStatus>
export type AppInitialStateType = {
    page: PageType
    showProfileItem: boolean
    portfolioNumber: number
    sendingStatus: SendingStatusType
}
export type PageType = 'all' | 'portfolio' | 'aboutMe' | 'getInTouch'