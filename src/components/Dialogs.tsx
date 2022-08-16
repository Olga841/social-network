import React, {ChangeEvent} from "react";
import s from "./componrnts_styles/Dialogs.module.css";
import {DialogItem, DialogItemPropsType} from "./DialogItem";
import {Message, MessagePropsType} from "./Message";

export type DialogsPropsType = {
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessagePropsType>
    addMessage: (newMessage: string) => void
    changeMessage: (newMessage: string) => void
    newMessage: string
}

export const Dialogs = (props: DialogsPropsType) => {
    const newMessage = React.createRef<HTMLTextAreaElement>()
    const addMessage = () => {
        if (newMessage.current) {
            props.addMessage(newMessage.current.value)
        }
    }
    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (newMessage.current) {
            props.changeMessage(e.currentTarget.value)
        }
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsList}>
                {props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {props.messages.map(m => <Message message={m.message}/>)}
                <textarea ref={newMessage}
                          onChange={onMessageChange}
                          value={props.newMessage}/>
                <button onClick={addMessage}>Send
                </button>
            </div>
        </div>)
}