import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";


export type UserType = {
    _id: string
    name: string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([])
    const addUserCallback = (name: string) => {
        let newUser: UserType = {
            _id: v1(),
            name
        }
        if(newUser.name !== '')
        setUsers([newUser, ...users])
    }

    return (
        <div>
            <hr/>
            Home assignment 3
            <hr/>

            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
