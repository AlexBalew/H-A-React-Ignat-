import {UserType} from "../HW8";

export const homeWorkReducer = (state: Array<UserType>, action: allACTypes): Array<UserType> => {
    switch (action.type) {
        case 'SORT_UP': {
            return [...state].sort((a, b) => a.name < b.name ? -48 : 48)
        }
        case 'SORT_DOWN': {

            return [...state].sort((a, b) => a.name > b.name ? -48 : 48)
        }
        case 'VERIFICATION': {
            return state.filter(n => n.age >= action.age)
        }
        default:
            return state
    }
}

type allACTypes = {type: 'SORT_UP'} | {type: 'SORT_DOWN'} | {type: 'VERIFICATION', age: 18}

