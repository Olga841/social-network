import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Nav} from './components/Nav';
import {BrowserRouter, HashRouter, Route, Routes, useParams} from "react-router-dom";
import {ProfileContainer} from "./components/ProfileContainer";
import {DialogsContainer} from "./components/DialogsContainer";
import {UsersContainer} from "./components/UsersContainer";
import {HeaderContainer} from "./components/HeaderContainer";


function App() {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <Nav/>
                <div className="content">
                    <Routes>
                        <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                        <Route path='/' element={<ProfileContainer/>}/>
                        <Route path='/messages' element={<DialogsContainer/>}/>
                        <Route path='/users' element={<UsersContainer/>}/>
                    </Routes>
                </div>
                <footer className='footer'>x</footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
