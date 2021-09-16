import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.body}>
        <div className={s.main}>
            <input type="checkbox"/>
            <div>
                <span className="first"></span>
                <span className="second"></span>
                <span className="third"></span>
            </div>
            <nav className={s.menu}>
                <NavLink to='/pre-junior' className={s.nav}>Pre-Junior </NavLink>
                <NavLink to='/junior'>Junior </NavLink>
                <NavLink to='/adv-junior'>Adv-Junior </NavLink>
            </nav>
        </div>
        </div>
    )
}

export default Header
