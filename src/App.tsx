import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Profile} from './components/Profile';
import {Nav} from './components/Nav';
import {Dialogs} from "./components/Dialogs";
import {HashRouter, Route, Routes} from "react-router-dom";
import {DialogItemPropsType} from "./components/DialogItem";
import {MessagePropsType} from "./components/Message";
import {PostPropsType} from "./components/Post";
import {RootStateType, StoreType} from "./components/redux/state";

export type AppPropsType = {
    // posts: Array<PostPropsType>
    // dialogs: Array<DialogItemPropsType>
    // messages: Array<MessagePropsType>
    // newPostText: string
    dispatch: (action: any) => any
    state: RootStateType
    // changePostText: (newPostText: string) => void
    // addMessage: (newMessage: string) => void
    // changeMessageText: (text: string) => void
    // newMessage: string
}

function App(props: AppPropsType) {

    return (
        <HashRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="content">
                    <Routes>
                        <Route path='/profiles' element={<Profile posts={props.state.profilePage.posts}
                                                                  dispatch={props.dispatch}
                                                                  newPostText={props.state.profilePage.newPostText}/>}/>
                        <Route path='/' element={<Profile posts={props.state.profilePage.posts}
                                                          dispatch={props.dispatch}
                                                          newPostText={props.state.profilePage.newPostText}/>}/>
                        <Route path='/messages' element={<Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                                  messages={props.state.dialogsPage.messages}
                                                                  dispatch={props.dispatch}
                                                                  newMessage={props.state.dialogsPage.newMessage}/>}/>
                    </Routes>
                </div>
                <footer className='footer'>x</footer>
            </div>
        </HashRouter>
    );
}

export default App;
