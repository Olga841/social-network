import React from "react";
import s from "./componrnts_styles/Dialogs.module.css";
import {DialogItem, DialogItemPropsType} from "./DialogItem";
import {Message, MessagePropsType} from "./Message";
import {addMessageAC, changeMessageTextAC} from "./redux/state";

export type DialogsPropsType = {
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessagePropsType>
    dispatch: (action: any) => void
    newMessage: string
}

export const Dialogs = (props: DialogsPropsType) => {
    const newMessage = React.createRef<HTMLTextAreaElement>()
    const addMessage = () => {
        if (newMessage.current) {
            props.dispatch(addMessageAC(newMessage.current.value))
        }
    }
    const onMessageChange = () => {
        if (newMessage.current) {
            props.dispatch(changeMessageTextAC(newMessage.current.value))
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