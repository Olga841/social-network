import s from "./componrnts_styles/Dialogs.module.css";
import React from "react";

export type MessagePropsType = {
    message: string
}

 export const Message = (props: MessagePropsType) => {
    return (<div className={s.message}>{props.message}</div>    )
}