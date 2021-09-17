import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HA8.module.css'

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople = [
    {_id: 0, name: 'Jeff', age: 3},
    {_id: 1, name: 'Klaus', age: 66},
    {_id: 2, name: 'Avery', age: 16},
    {_id: 3, name: 'Reginald', age: 44},
    {_id: 4, name: 'Duper', age: 40},
    {_id: 5, name: 'Lorraine', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople)

    const finalPeople = people.map((p: UserType) => (
        <div key={p._id} className={s.table}>
                    <div>{p.name}</div>
                    <div className={s.age}>{p.age}</div>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'SORT_UP'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'SORT_DOWN'}))
    const verificationOfMajority = () => setPeople(homeWorkReducer(initialPeople, {type: 'VERIFICATION', age: 18}))

    return (
        <div>
            <hr/>
            Home assignment 8

            <hr/>
            <div className={s.container}>
                <div className={s.title}>
                    <div>Names</div>
                    <div className={s.age}>Age</div>
                </div>

                <div>
                    {finalPeople}
                </div>
                <div className={s.buttons}>
                    <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
                    <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
                    <div><SuperButton onClick={verificationOfMajority}>verification of majority</SuperButton></div>
                </div>
            </div>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}

        </div>
    )
}

export default HW8
