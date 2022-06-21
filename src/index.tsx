import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export const dialogsData = [
    {id: 1, name: 'Vasya'},
    {id: 2, name: 'Valera'},
    {id: 3, name: 'Vera'},
    {id: 4, name: 'Vyacheslav'},
    {id: 5, name: 'Vova'},
    {id: 6, name: 'Vitya'}
]

export const postsData = [
    {post: "This is my first post! Let's fly!", like: '2 likes'},
    {post: "Oh! This social network is awesome!", like: '2 likes'}
]

export const messagesData = [
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


ReactDOM.render(
    <React.StrictMode>
        <App posts={postsData} dialogs={dialogsData} messages={messagesData}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
