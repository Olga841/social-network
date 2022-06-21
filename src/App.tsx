import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Profile, ProfilePropsType} from './components/Profile';
import {Nav} from './components/Nav';
import {Dialogs} from "./components/Dialogs";
import s from "./components/componrnts_styles/main.module.css";
import {Route, Routes, HashRouter} from "react-router-dom";
import {DialogItemPropsType} from "./components/DialogItem";
import {MessagePropsType} from "./components/Message";
import {PostPropsType} from "./components/Post";

export type AppPropsType = {
    posts: Array<PostPropsType>
    dialogs: Array<DialogItemPropsType>
    messages: Array<MessagePropsType>
}

function App(props: AppPropsType) {
    return (
        <HashRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="content">
                    <Routes>
                        <Route path='/profiles' element={<Profile posts={props.posts}/>}/>
                        <Route path='/' element={<Profile posts={props.posts}/>}/>
                        <Route path='/messages' element={<Dialogs dialogs={props.dialogs}
                                                                  messages={props.messages}/>}/>
                    </Routes>
                </div>
                <footer className='footer'>x</footer>
            </div>
        </HashRouter>
    );
}

export default App;
