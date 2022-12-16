import React from "react";
import s from './components_styles/nav.module.css'
import {NavLink} from "react-router-dom";
import {Sidebar} from "./Sidebar";
import {useSelector} from "react-redux";
import {AppStateType} from "./redux/redux-store";

export function Nav() {
    const userId = useSelector<AppStateType, number | null>(state => state.auth.response.data.id)

    return (
        <div className={s.nav}>
            <nav>
                <div><NavLink to={"/profile/" + userId}>Profiles</NavLink></div>
                <div><NavLink to={"/messages"}>Messages</NavLink></div>
                <div><NavLink to="/news">News</NavLink></div>
                <div><NavLink to="/music">Music</NavLink></div>
                <div><NavLink to="/settings">Settings</NavLink></div>
                <div><NavLink to="/users">Users</NavLink></div>
            </nav>
            <Sidebar/>
        </div>

    )
}