import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import Preloader from "./Preloader/Preloader";
import s from './hw10.module.css'


function HW10() {
    let loadingMode = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    let dispatch = useDispatch()


    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 3000)
        console.log('LOADING TIME!')
    };


    return (
        <div>
            Home assignment 10
            <hr/>
            <div className={s.loadingContainer}>
                {loadingMode
                    ? (
                        <Preloader/>
                    ) : (
                        <div className={s.superButton}>
                            <SuperButton onClick={setLoading}>Load</SuperButton>
                        </div>
                    )
                }
            </div>

            <hr/>
        </div>
    )
}

export default HW10
