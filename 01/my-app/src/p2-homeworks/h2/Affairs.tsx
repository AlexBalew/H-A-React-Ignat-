import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import c from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (value: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <div>

        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
        </div>
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div>
            {mappedAffairs}
            <button className={c.filterButtonName} onClick={setAll}>All</button>
            <button className={c.filterButtonName} onClick={setHigh}>High</button>
            <button className={c.filterButtonName} onClick={setMiddle}>Middle</button>
            <button className={c.filterButtonName} onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
