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
    const mappedAffairs = props.data.map((affair: AffairType) => (
        <div>
        <Affair
            key={affair._id}
            affair={affair}
            deleteAffairCallback={props.deleteAffairCallback}
        />
        </div>
    ))

    const setAll = () => {
        props.setFilter('all')
    }
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMedium = () => {
        props.setFilter('medium')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div>
            {mappedAffairs}
            <button className={c.filterButtonName} onClick={setAll}>All</button>
            <button className={c.filterButtonName} onClick={setHigh}>High</button>
            <button className={c.filterButtonName} onClick={setMedium}>Medium</button>
            <button className={c.filterButtonName} onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
