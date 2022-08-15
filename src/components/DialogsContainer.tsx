import React from "react";
import s from "./componrnts_styles/Dialogs.module.css";
import {DialogItem, DialogItemPropsType} from "./DialogItem";
import {Message, MessagePropsType} from "./Message";
import {addMessageAC, changeMessageTextAC} from "./redux/store";
import {StoreType} from "./redux/redux-store";
import {Dialogs} from "./Dialogs";

export type DialogsPropsType = {
    store: StoreType
    // dialogs: Array<DialogItemPropsType>
    // messages: Array<MessagePropsType>
    // dispatch: (action: any) => void
    // newMessage: string
}

export const DialogsContainer = (props: DialogsPropsType) => {
    const newMessage = React.createRef<HTMLTextAreaElement>()
    const addMessage = () => {
        if (newMessage.current) {
            props.store.dispatch(addMessageAC(newMessage.current.value))
        }
    }
    const onMessageChange = () => {
        if (newMessage.current) {
            props.store.dispatch(changeMessageTextAC(newMessage.current.value))
        }
    }
    return <Dialogs dialogs={props.store.getState().dialogsPage.dialogs}
                    messages={props.store.getState().dialogsPage.messages}
                    addMessage={addMessage}
                    changeMessage={onMessageChange}
                    newMessage={props.store.getState().dialogsPage.newMessage}/>
}