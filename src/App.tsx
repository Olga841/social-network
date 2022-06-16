import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Profile, MainTypeProps} from './components/Profile';
import {Nav} from './components/Nav';
import {Dialogs} from "./components/Dialogs";
import s from "./components/componrnts_styles/main.module.css";
import {Route, Routes, HashRouter} from "react-router-dom";

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

function App(props:MainTypeProps) {
    return (
        <HashRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="content">
                    <Routes>
                        <Route path='/profiles' element={<Profile posts={props.posts}/>}/>
                        <Route path='/' element={<Profile posts={props.posts}/>}/>
                        <Route path='/messages' element={<Dialogs dialogs={dialogsData} messages={messagesData}/>}/>
                    </Routes>
                </div>
                <footer className='footer'>x</footer>
            </div>
        </HashRouter>
    );
}

export default App;
