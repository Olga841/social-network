import React from "react";
import s from "./componrnts_styles/main.module.css";
import {DialogItem} from "./DialogItem";
import {Message} from "./Message";

const dialogsData = [
    {id: 1, name: 'Vasya'},
    {id: 2, name: 'Valera'},
    {id: 3, name: 'Vera'},
    {id: 4, name: 'Vyacheslav'},
    {id: 5, name: 'Vova'},
    {id: 6, name: 'Vitya'}
]

const messagesData = [
    {message: 'Hello!'},
    {message: 'Hello!'},
    {message: 'Hello!'},
    {message: 'Hello!'},
    {message: 'Hello!'},
    {message: 'Hello!'},
    {message: 'Hello!'},
    {message: 'Hello!'},
    {message: 'Hello!'}
]

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsList}>
                {dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {messagesData.map(m => <Message message={m.message}/>)}
                <textarea></textarea>
            </div>
        </div>)
}