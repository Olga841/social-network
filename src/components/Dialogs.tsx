import React from "react";
import s from "./componrnts_styles/Dialogs.module.css";
import {DialogItem, DialogItemPropsType} from "./DialogItem";
import {Message, MessagePropsType} from "./Message";

export type DialogsPropsType = {
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessagePropsType>
}

export const Dialogs = (props: DialogsPropsType) => {
    const addMessage = () => {
        alert('?')
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsList}>
                {props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {props.messages.map(m => <Message message={m.message}/>)}
                <textarea></textarea>
                <button onClick={() => {
                    addMessage()
                }}>Send
                </button>
            </div>
        </div>)
}