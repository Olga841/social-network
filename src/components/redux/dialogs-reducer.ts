const ADD_MESSAGE = 'ADD-MESSAGE'
const CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT'

export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    message: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessage: string
}
type AddMessage = {
    type: 'ADD-MESSAGE'
    newMessage: string
}
type ChangeMessageText = {
    type: 'CHANGE-MESSAGE-TEXT'
    text: string
}
type ActionsTypes = AddMessage | ChangeMessageText

const initialState = {
    dialogs: [
        {id: 1, name: 'Vasya'},
        {id: 2, name: 'Valera'},
        {id: 3, name: 'Vera'},
        {id: 4, name: 'Vyacheslav'},
        {id: 5, name: 'Vova'},
        {id: 6, name: 'Vitya'}
    ],
    messages: [
        {message: 'Hello!'},
        {message: 'Hello!'},
        {message: 'Hello!'},
        {message: 'Hello!'},
        {message: 'Hello!'},
        {message: 'Hello!'},
        {message: 'Hello!'},
        {message: 'Hello!'},
        {message: 'Hello!'}
    ],
    newMessage: 'Hello, my Dear friend!'
}


export function dialogsReducer(state: DialogsPageType = initialState, action: ActionsTypes): DialogsPageType {
    if (action.type === ADD_MESSAGE) {
        return {...state, messages: [...state.messages, {message: action.newMessage}], newMessage: ''}
    } else if (action.type === CHANGE_MESSAGE_TEXT) {
        return {...state, newMessage: action.text}
    }
    return {...state}
}

export const addMessageAC = (newMessage: string) => ({type: ADD_MESSAGE, newMessage} as const)
export const changeMessageTextAC = (text: string) => ({type: CHANGE_MESSAGE_TEXT, text} as const)