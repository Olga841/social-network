import React from "react";
import s from './componrnts_styles/nav.module.css'
import {NavLink} from "react-router-dom";
import {Sidebar} from "./Sidebar";

export function Nav() {
    return (
        <div className={s.nav}>
            <nav>
                <div><NavLink to="/profiles">Profiles</NavLink></div>
                <div><NavLink to="/messages">Messages</NavLink></div>
                <div><NavLink to="/news">News</NavLink></div>
                <div><NavLink to="/music">Music</NavLink></div>
                <div><NavLink to="/settings">Settings</NavLink></div>
            </nav>
            <Sidebar/>
        </div>

    )
}