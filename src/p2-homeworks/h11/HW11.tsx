import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './hw11.module.css'

function HW11() {
    const [value1, setValue1] = useState(50)
    const [value2, setValue2] = useState(100)
    const [value3, setValue3] = React.useState<number[]>([value1, value2]);



    return (
        <div>
            Home assignment 11
            <hr/>

            {/*should work (должно работать)*/}
            <div className={s.rangeBlock}>
                <span className={s.span}>{value1 < value2 ? value1 : value2-1}</span>
                <SuperRange
                    onChangeRange={setValue1}
                    setValue3={setValue3}
                    value2={value2}
                    value1={value1}
                />
            </div>

            <div className={s.doubleRangeBlock}>
                <span className={s.span}>{value1 < value2 ? value1 : value2-1}</span>
                <SuperDoubleRange
                    value1={value1}
                    value2={value2}
                    value3={value3}
                    setValue1={setValue1}
                    setValue2={setValue2}
                    setValue3={setValue3}
                />
                <span className={s.span}>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
