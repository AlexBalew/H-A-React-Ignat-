import React, {useState} from 'react'
import Affairs from './Affairs'
import c from './Affairs.module.css'


export type AffairPriorityType = 'low' | 'medium' | 'high'

export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType


const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: 'To take care of wigs', priority: 'low'},
    {_id: 2, name: 'To get drunk', priority: 'high'},
    {_id: 3, name: 'To annoy Stan', priority: 'low'},
    {_id: 4, name: 'To fool Steve... again ', priority: 'high'},
    {_id: 5, name: 'To throw a complete tantrum', priority: 'medium'},
]

export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): AffairType[] => {
    let newPriorityAffairs = affairs // need to fix any
    if (filter === 'all') {
        return newPriorityAffairs
    }
    if (filter === 'low') {
        newPriorityAffairs = affairs.filter(a => a.priority === 'low')
        return newPriorityAffairs
    }
    if (filter === 'medium') {
        newPriorityAffairs = affairs.filter(a => a.priority === 'medium')
        return newPriorityAffairs
    }
    if (filter === 'high') {
        newPriorityAffairs = affairs.filter(a => a.priority === 'high')
        return newPriorityAffairs
    }
    return affairs
}

export const deleteAffair = (affairs: Array<AffairType>, _id: number) => {
    return (affairs.filter(a => a._id !== _id))
}

function HW2() {

    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs)

    const [filter, setFilter] = useState<FilterType>('all')


    const filteredAffairs = filterAffairs(affairs, filter)

    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))



    return (
        <div>
            <hr/>
            <div style={{marginBottom:'10px'}}>
            Home assignment 2
            </div>
            <div className={c.titleName}>
            <span> Affairs </span><span> Priority </span>
            </div>
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

        </div>
    )
}

export default HW2
