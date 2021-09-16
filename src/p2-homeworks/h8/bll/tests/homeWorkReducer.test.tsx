
import {homeWorkReducer} from '../homeWorkReducer'
import {UserType} from "../../HW8";

let initialState: Array<UserType>

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Jeff', age: 3},
        {_id: 1, name: 'Klaus', age: 66},
        {_id: 2, name: 'Avery', age: 16},
        {_id: 3, name: 'Reginald', age: 44},
        {_id: 4, name: 'Duper', age: 40},
        {_id: 5, name: 'Lorraine', age: 55},
    ]
})

test('sort name up', () => {

    const newState = homeWorkReducer(initialState, {type: 'SORT_UP'})

    expect(newState.length).toEqual(initialState.length)
    expect(newState[0].name).toBe('Avery')
    expect(newState[1].name).toBe('Duper')
    expect(newState[5].name).toBe('Reginald')
    expect(newState[1].age).toBe(40)

})

test('sort name down', () => {

    const newState = homeWorkReducer(initialState, {type: 'SORT_DOWN'})

    expect(newState.length).toEqual(initialState.length)
    expect(newState[0].name).toBe('Reginald')
    expect(newState[1].name).toBe('Lorraine')
    expect(newState[5].name).toBe('Avery')
    expect(newState[1].age).toBe(55)




})

test('check age 18', () => {

    const newState = homeWorkReducer(initialState, {type: 'VERIFICATION', age: 18})

    expect(newState.length).toBe(4)
    expect(newState[4]).toBe(undefined)
    expect(newState[5]).toBe(undefined)
})
