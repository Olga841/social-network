import {ActionsTypes, DialogsPageType, MessageType, PostType} from "./state";

export function dialogsReducer(state: DialogsPageType, action: ActionsTypes) {
    if (action.type === 'ADD-MESSAGE') {
        let message: MessageType = {message: action.newMessage}
        state.messages.push(message)
        state.newMessage = ''
    } else if (action.type === 'CHANGE-MESSAGE-TEXT') {
        state.newMessage = action.text
        console.log(state.newMessage)
    }
    return state;
}