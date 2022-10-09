import React from "react";
import s from './componrnts_styles/header.module.css'
import {NavLink} from "react-router-dom";
import {AuthPropsType} from "./HeaderContainer";

export function Header(props: AuthPropsType) {
    return (
        <header className={s.header}>
            <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="logo"/>
            <div className={s.loginBlock}>
                <NavLink to={'/auth'}>Log In</NavLink>
            </div>
        </header>
    )
}