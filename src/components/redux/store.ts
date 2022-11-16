import React from "react";
// import {profileReducer} from "./profile-reducer";
// import {dialogsReducer} from "./dialogs-reducer";
//
// export type PostType = {
//     post: string
//     like: string
// }
// type DialogType = {
//     id: number
//     name: string
// }
// export type MessageType = {
//     message: string
// }
// export  type ProfilePageType = {
//     posts: Array<PostType>
//     newPostText: string
// }
// export type DialogsPageType = {
//     dialogs: Array<DialogType>
//     messages: Array<MessageType>
//     newMessage: string
// }
// export type RootStateType = {
//     profilePage: ProfilePageType
//     dialogsPage: DialogsPageType
// }
// export type StoreType = {
//     _state: RootStateType
//     getState: () => RootStateType
//     _rerenderEntireTree: () => void
//     subscriber: (observer: () => void) => void
//     dispatch: (action: ActionsTypes) => void
// }
//
// export type ActionsTypes = AddPostType | ChangePostText | AddMessage | ChangeMessageText
//
// export const ADD_POST = 'ADD-POST'
// export const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT'
// export const ADD_MESSAGE = 'ADD-MESSAGE'
// export const CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT'

// export const addPostAC = (newPost: string) => ({type: ADD_POST, newPost} as const)
// export const changePostTextAC = (text: string) => ({type: CHANGE_POST_TEXT, text} as const)
// export const addMessageAC = (newMessage: string) => ({type: ADD_MESSAGE, newMessage} as const)
// export const changeMessageTextAC = (text: string) => ({type: CHANGE_MESSAGE_TEXT, text} as const)
//
// type AddPostType = {
//     type: 'ADD-POST'
//     newPost: string
// }
// type ChangePostText = {
//     type: 'CHANGE-POST-TEXT'
//     text: string
// }
// type AddMessage = {
//     type: 'ADD-MESSAGE'
//     newMessage: string
// }
// type ChangeMessageText = {
//     type: 'CHANGE-MESSAGE-TEXT'
//     text: string
// }
// export const store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {post: "This is my first post! Let's fly!", like: '2 likes'},
//                 {post: "Oh! This social network is awesome!", like: '2 likes'}
//             ],
//             newPostText: 'it-kamasutra'
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: 'Vasya'},
//                 {id: 2, name: 'Valera'},
//                 {id: 3, name: 'Vera'},
//                 {id: 4, name: 'Vyacheslav'},
//                 {id: 5, name: 'Vova'},
//                 {id: 6, name: 'Vitya'}
//             ],
//             messages: [
//                 {message: 'Hello!'},
//                 {message: 'Hello!'},
//                 {message: 'Hello!'},
//                 {message: 'Hello!'},
//                 {message: 'Hello!'},
//                 {message: 'Hello!'},
//                 {message: 'Hello!'},
//                 {message: 'Hello!'},
//                 {message: 'Hello!'}
//             ],
//             newMessage: 'Hello, my Dear friend!'
//         }
//     },
//     getState() {
//         return this._state
//     },
//     _rerenderEntireTree() {
//
//     },
//
//     subscriber(observer) {
//         this._rerenderEntireTree = observer
//     },
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._rerenderEntireTree()
//     }
// }