import React from "react";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {ChangeThemeAC} from "./bll/themeReducer";
import s from './HW12.module.css'

const themes = ['default', 'dark', 'red', 'soft'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.themes.exactTheme)

    let dispatch = useDispatch()

    const onChangeCallback2 = (theme: string) => {
        dispatch(ChangeThemeAC(theme))
    }

    return (
        <div>
            <hr/>
            <div className={s[theme]}
                 style={{width: '215px', height: '60px', border: '1px solid #454857', marginTop: '20px', padding: '5px'}}>

            <span className={s[theme + '-text']} style={{marginLeft: '5px'}}>
                Home assignment 12
            </span>

                <SuperRadio className={s.w}
                            name={'radio'}
                            options={themes}
                            value={theme}
                            onChangeOption={onChangeCallback2}/>
            </div>
            <hr/>
        </div>

    );
}

export default HW12;
