import React from "react";
import s from "./components_styles/Dialogs.module.css";
import {NavLink} from "react-router-dom";

export type DialogItemPropsType = {
    name: string
    id: number
}

export const DialogItem = (props: DialogItemPropsType) => {
    return (<div className={s.dialogItem + " " + s.active}>
            <NavLink to={`/dialogs+${props.id}`}>{props.name} </NavLink>
        </div>
    )
}