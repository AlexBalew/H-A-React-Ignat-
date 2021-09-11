import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import s from './../../p1-main/m1-ui/u1-app/App.module.css'

const arr = ['Roger', 'Stan', 'Francine', 'Hayley', 'Steve']

function HW7() {
    const [value, onChangeOption] = useState(arr[2])

    return (
        <div>
            <hr/>
            Home assignment 7
            <hr/>
            <br/>

            <div className={s.hw7}>
                <SuperSelect
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
                <SuperRadio
                    name={'radio'}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
            <hr/>
        </div>
    )
}

export default HW7
