import React from "react";
import s from '../components_styles/header.module.css'
import {NavLink} from "react-router-dom";

export type HeaderPropsType = {
    data: {
        id: number | null
        email: string | null
        login: string | null
    }
}

export function Header(props: HeaderPropsType) {
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