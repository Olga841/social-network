import s from "./components_styles/nav.module.css";
import React from "react";

export function FriendInfo() {
    return (<div>
        <img src='https://klike.net/uploads/posts/2019-03/1551511801_1.jpg' className={s.friendAva}
             alt='ava'/>
        <div className={s.friendDesc}>Vova</div>
    </div>)
}