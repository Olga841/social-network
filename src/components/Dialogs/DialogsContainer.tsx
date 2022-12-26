import React from "react";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {Dispatch} from "redux";
import {addMessageAC, changeMessageTextAC, DialogType, MessageType} from "../redux/dialogs-reducer";

type MapStatePropsType = {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>
    newMessage: string
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessage: state.dialogsPage.newMessage
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addMessage: (newMessage: string) => (dispatch(addMessageAC(newMessage))),
        changeMessage: (newMessage: string) => (dispatch(changeMessageTextAC(newMessage)))
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)