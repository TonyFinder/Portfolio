import {SendingStatusType} from '../../utils/enums';
import {NotificationType} from '../../components/App/MainPage/Common/Notifications/Notification/Notification';

let initialState: AppInitialStateType = {
    page: 'all',
    showProfileItem: false,
    portfolioNumber: 0,
    closedPortfolioItem: false,
    sendingStatus: SendingStatusType.disabled,
    notifications: []
}

export const appReducer = (state: AppInitialStateType = initialState, action: AppActionTypes): AppInitialStateType => {
    switch (action.type) {
        case 'APP/CURRENT-PAGE':
            return {...state, page: action.page}
        case 'APP/CURRENT-PORTFOLIO':
            return {...state, portfolioNumber: action.number}
        case 'APP/SHOW-PROFILE-ITEM':
            return {...state, showProfileItem: action.show}
        case 'APP/CLOSED-PORTFOLIO-ITEM':
            return {...state, closedPortfolioItem: action.closedPortfolioItem}
        case 'APP/SET-SENDING-MESSAGE-STATUS':
            return {...state, sendingStatus: action.sendingStatus}
        case "APP/ADD-NOTIFICATION":
            return {...state, notifications: [{...action.payload}, ...state.notifications]}
        case "APP/REMOVE-NOTIFICATION":
            return {...state, notifications: state.notifications.filter(f => f.id !== action.id)}
        default:
            return state
    }
}

// actions
export const changeCurrentPage = (page: PageType) => ({type: 'APP/CURRENT-PAGE', page} as const)
export const changePortfolioNumber = (number: number) => ({type: 'APP/CURRENT-PORTFOLIO', number} as const)
export const setShowProfileItem = (show: boolean) => ({type: 'APP/SHOW-PROFILE-ITEM', show} as const)
export const closePortfolioItem = (closedPortfolioItem: boolean) => ({type: 'APP/CLOSED-PORTFOLIO-ITEM', closedPortfolioItem} as const)
export const changeSendingMessageStatus = (sendingStatus: SendingStatusType) => ({type: 'APP/SET-SENDING-MESSAGE-STATUS', sendingStatus} as const)
export const addNotification = (payload: NotificationType) => ({type: 'APP/ADD-NOTIFICATION', payload} as const)
export const removeNotification = (id: string) => ({type: 'APP/REMOVE-NOTIFICATION', id} as const)

// thunks

// types
export type AppActionTypes =
    | ReturnType<typeof changeCurrentPage>
    | ReturnType<typeof changePortfolioNumber>
    | ReturnType<typeof setShowProfileItem>
    | ReturnType<typeof closePortfolioItem>
    | ReturnType<typeof changeSendingMessageStatus>
    | ReturnType<typeof addNotification>
    | ReturnType<typeof removeNotification>
export type AppInitialStateType = {
    page: PageType
    showProfileItem: boolean
    portfolioNumber: number
    closedPortfolioItem: boolean
    sendingStatus: SendingStatusType
    notifications: NotificationType[] | []
}
export type PageType = 'all' | 'portfolio' | 'aboutMe' | 'getInTouch'