import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Main} from './components/Main';
import {Nav} from './components/Nav';
import {Dialogs} from "./components/Dialogs";
import s from "./components/componrnts_styles/main.module.css";
import {Route, Routes, HashRouter} from "react-router-dom";

const postsData = [
    {post: "This is my first post! Let's fly!", like: '2 likes'},
    {post: "Oh! This social network is awesome!", like: '2 likes'}
]

function App() {

    return (
        <HashRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="content">
                    <Routes>
                        <Route path='/profiles' element={<Main/>}/>
                        <Route path='/' element={<Main/>}/>
                        <Route path='/messages' element={<Dialogs/>}/>
                    </Routes>
                </div>
                <footer className='footer'>x</footer>
            </div>
        </HashRouter>
    );
}

export default App;
