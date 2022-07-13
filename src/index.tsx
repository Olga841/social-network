import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {RootStateType, store, StoreType} from "./components/redux/state";
import ReactDOM from "react-dom";
import App from "./App";

type PropsType = {
    store: StoreType
}

const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                dispatch={store.dispatch.bind(store)}
                state={state}
                // posts={ store.getState().profilePage.posts}
                // dialogs={ store.getState().dialogsPage.dialogs}
                // messages={ store.getState().dialogsPage.messages}
                // dispatch={ store.dispatch.bind(store)}
                // newPostText={ store.getState().profilePage.newPostText}
                // changePostText={store.changePostText.bind(store)}
                // addMessage={store.addMessage.bind(store)}
                // changeMessageText={store.dispatch('CHANGE-MESSAGE-TEXT',).bind(store)}
                // newMessage={store.getState().dialogsPage.newMessage}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());
store.subscriber(rerenderEntireTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
