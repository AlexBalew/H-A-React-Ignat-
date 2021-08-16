import React, {ChangeEvent, useState, KeyboardEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        const CorruptedName = e.currentTarget.value.trim()

        if (CorruptedName) {
            setName(CorruptedName)
            error && setError('')
        } else {
            name && setName('')
            setError('name is needed')
        }
    }

    const addUser = () => {
        addUserCallback(name)
        alert(`Hello ${name}!`)
        setName('')
    }

    const getNameByEnterButton = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && name) {
            addUser()
            setName('')
        }
    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            getNameByEnterButton = {getNameByEnterButton}
        />
    )
}

export default GreetingContainer
