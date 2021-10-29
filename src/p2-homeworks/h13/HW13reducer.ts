import {Dispatch} from "redux";
import {requestApi} from "./request.api";

export type StateType = {
    isChecked: boolean
    response: string
}

let initState: StateType = {
    isChecked: false,
    response: 'click'
}

export const status13Reducer = (state = initState, action: AllACType): StateType => {
    switch (action.type) {
        case'CHANGE_STATUS':
            return {...state, isChecked: action.isChecked}
        case 'SET_RESPONSE':
            return {...state, response: action.response}
        default:
            return state
    }
}

type AllACType = ChangeStatusACType | SetResponseACType

type ChangeStatusACType = ReturnType<typeof ChangeStatusAC>

export const ChangeStatusAC = (isChecked: boolean) => {
    return {
        type: 'CHANGE_STATUS',
        isChecked
    } as const
}

type SetResponseACType = ReturnType<typeof SetResponseAC>

export const SetResponseAC = (response: string) => {
    return {
        type: 'SET_RESPONSE',
        response
    } as const
}

export const ChangeStatusTC = (isChecked: boolean) => (dispatch: Dispatch<AllACType>) => {
    requestApi.postValue(isChecked)
        .then((res) => {
            dispatch(ChangeStatusAC(isChecked))
            dispatch(SetResponseAC(res.data.errorText))
        })
        .catch((error) => {
            console.log(isChecked)
            console.log({...error});
            console.log(error.response ? error.response.data.errorText : error.message)
            dispatch(SetResponseAC(error.response.data.errorText))
        })

}