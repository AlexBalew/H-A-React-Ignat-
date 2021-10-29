import React, {ChangeEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {ChangeStatusTC} from "./HW13reducer";
import {AppStoreType} from "../h10/bll/store";
import s from './Request13.module.css'

function Request13() {

    let [value, setValue] = useState<boolean>(false)

    let dispatch = useDispatch();
    let response: string = useSelector<AppStoreType, string>(state => state.status.response)


    const changeStatus = () => {
        dispatch(ChangeStatusTC(value))
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.checked)
        let value = e.currentTarget.checked
        setValue(value)
        console.log(response)
    }

    return (
        <div>
            <div style={{margin: '10px'}}>Home assignment 13</div>
            <div className={s.request}>
            <SuperButton onClick={changeStatus}>request</SuperButton>
            <SuperCheckbox onChange={handleChange}/>
            </div>
            <div style={{height: '30px', marginLeft: '10px'}}>{response}</div>
            <hr/>
        </div>

    )
}


export default Request13;