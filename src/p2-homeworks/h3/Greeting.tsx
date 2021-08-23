import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    getNameByEnterButton: (e: KeyboardEvent<HTMLInputElement>) => void
}

const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, getNameByEnterButton} // деструктуризация пропсов
) => {
    const greetingInput = error ? s.greetingError&&s.greetingInputStyle : s.greetingInputStyle

    return (
        <div className={s.inputArea}>
            <input value={name}
                   onChange={setNameCallback}
                   className={greetingInput}
                   onKeyDown={getNameByEnterButton}
                   onBlur={setNameCallback}/>
            <button className={s.greetingButton}
                    onClick={addUser}>add</button>
            <span className={s.totalUsersStyle}>{totalUsers}</span>
            <span className={s.greetingError}>{error}</span>
        </div>
    )
}

export default Greeting
