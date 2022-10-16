let initialState: AboutMeStateType = {
    select: 'experience'
}

export const aboutMeReducer = (state: AboutMeStateType = initialState, action: AboutMeActionTypes): AboutMeStateType => {
    switch (action.type) {
        case 'ABOUT-ME/CHANGE-SELECTION':
            return {...state, select: action.select}
        default:
            return state
    }
}

// actions
export const changeSelection = (select: SelectType) => ({type: 'ABOUT-ME/CHANGE-SELECTION', select} as const)

// thunks

// types
export type AboutMeActionTypes = ReturnType<typeof changeSelection>
export type AboutMeStateType = {select: SelectType}
export type SelectType = 'experience' | 'education' | 'skills'