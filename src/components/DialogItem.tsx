import React from "react";
import s from "./componrnts_styles/main.module.css";
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: number
}

export const DialogItem = (props: DialogItemPropsType) => {
    return (<div className = {s.dialogItem} >
            <NavLink to = {`/dialogs+${props.id}`}>{props.name} </NavLink>
        </div>
)
}