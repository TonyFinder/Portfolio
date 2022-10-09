let initialState: AppInitialStateType = {
    page: 'all',
    showProfileItem: false,
    portfolioNumber: 1
}

export const appReducer = (state: AppInitialStateType = initialState, action: AppActionTypes): AppInitialStateType => {
    switch (action.type) {
        case 'APP/CURRENT-PAGE':
            return {...state, page: action.page}
        case 'APP/CURRENT-PORTFOLIO':
            return {...state, portfolioNumber: action.number}
        case 'APP/SHOW-PROFILE-ITEM':
            return {...state, showProfileItem: action.show}
        default:
            return state
    }
}

// actions
export const changeCurrentPage = (page: PageType) => ({type: 'APP/CURRENT-PAGE', page} as const)
export const changePortfolioNumber = (number: number) => ({type: 'APP/CURRENT-PORTFOLIO', number} as const)
export const setShowProfileItem = (show: boolean) => ({type: 'APP/SHOW-PROFILE-ITEM', show} as const)

// thunks

// types
export type AppActionTypes =
    | ReturnType<typeof changeCurrentPage>
    | ReturnType<typeof changePortfolioNumber>
    | ReturnType<typeof setShowProfileItem>
export type AppInitialStateType = {
    page: PageType
    showProfileItem: boolean
    portfolioNumber: number
}
export type PageType = 'all' | 'portfolio' | 'aboutMe' | 'getInTouch'