let initialState: AppInitialStateType = {
    page: 'all'
}

export const appReducer = (state: AppInitialStateType = initialState, action: AppActionTypes): AppInitialStateType => {
    switch (action.type) {
        case 'APP/CURRENT-PAGE':
            return {...state, page: action.page}
        default:
            return state
    }
}

// actions
export const changeCurrentPage = (page: PageType) => ({type: 'APP/CURRENT-PAGE', page} as const)

// thunks

// types
export type AppActionTypes = ReturnType<typeof changeCurrentPage>
export type AppInitialStateType = {
    page: PageType
}
export type PageType = 'all' | 'portfolio' | 'aboutMe' | 'getInTouch'