import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import {addPost, RootStateType} from "./components/redux/state";


export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                posts={state.profilePage.posts}
                dialogs={state.dialogsPage.dialogs}
                messages={state.dialogsPage.messages}
                addPost={addPost}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
