import s from "./componrnts_styles/main.module.css";
import React from "react";

export type MessagePropsType = {
    message: string
}

 export const Message = (props: MessagePropsType) => {
    return (<div>{props.message}</div>    )
}