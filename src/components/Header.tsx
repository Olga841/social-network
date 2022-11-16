import React from "react";
import s from './components_styles/header.module.css'
import {NavLink} from "react-router-dom";
import {AuthPropsType} from "./HeaderContainer";

export function Header(props: AuthPropsType) {
    console.log(props)
    return (
        <header className={s.header}>
            <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="logo"/>
            <div className={s.loginBlock}>
                {props.data.id ? <img
                        src={'https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0'}
                        alt={'me'}/> :
                    <NavLink to={'/login'}>Log In</NavLink>}

            </div>
        </header>
    )
}