import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Main} from './components/Main';
import {Nav} from './components/Nav';
import {Dialogs} from "./components/Dialogs";
import s from "./components/componrnts_styles/main.module.css";
import {Route, Routes, HashRouter} from "react-router-dom";
import {PostPropsType} from "./components/Post";

export type AppPropsType = {
    posts: Array<PostPropsType>
}

function App(props:AppPropsType) {
    return (
        <HashRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="content">
                    <Routes>
                        <Route path='/profiles' element={<Main posts={props.posts}/>}/>
                        <Route path='/' element={<Main posts={props.posts}/>}/>
                        <Route path='/messages' element={<Dialogs/>}/>
                    </Routes>
                </div>
                <footer className='footer'>x</footer>
            </div>
        </HashRouter>
    );
}

export default App;
