import s from "./componrnts_styles/Dialogs.module.css";
import React from "react";
import {FriendInfo} from "./FriendInfo";

export type MessagePropsType = {
    message: string
}

export const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>
            <FriendInfo/>
            <div>{props.message}</div>
        </div>)
}