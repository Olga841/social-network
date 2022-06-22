import React from 'react'
import s from './componrnts_styles/nav.module.css';
import {FriendInfo} from "./FriendInfo";

export function Sidebar() {
    return (
        <div>
            <div className={s.title}>Friends</div>
            <div className={s.wrapper}>
                <FriendInfo/>
                <FriendInfo/>
                <FriendInfo/>
            </div>
        </div>
    )
}


