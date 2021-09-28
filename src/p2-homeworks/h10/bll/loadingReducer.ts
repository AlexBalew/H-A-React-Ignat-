export type InitStateType = {
    isLoading: boolean
}

const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: SwitchLoadingType): InitStateType => {
    switch (action.type) {
        case 'SWITCH_LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

type SwitchLoadingType = ReturnType<typeof loadingAC>

export const loadingAC = (isLoading: boolean) => {
    return {
        type: 'SWITCH_LOADING',
        isLoading
    }
}