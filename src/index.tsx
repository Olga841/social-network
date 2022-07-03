import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {addMessage, addPost, changeMessageText, changePostText, state, subscriber} from "./components/redux/state";
import ReactDOM from "react-dom";
import App from "./App";

const rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                posts={state.profilePage.posts}
                dialogs={state.dialogsPage.dialogs}
                messages={state.dialogsPage.messages}
                addPost={addPost}
                newPostText={state.profilePage.newPostText}
                changePostText={changePostText}
                addMessage={addMessage}
                changeMessageText={changeMessageText}
                newMessage={state.dialogsPage.newMessage}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree();
subscriber(rerenderEntireTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
