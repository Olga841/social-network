import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Nav} from './components/Nav';
import {HashRouter, Route, Routes} from "react-router-dom";
import {ProfileContainer} from "./components/ProfileContainer";
import {DialogsContainer} from "./components/DialogsContainer";
import {UsersContainer} from "./components/UsersContainer";


function App() {

    return (
        <HashRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="content">
                    <Routes>
                        <Route path='/profiles' element={<ProfileContainer/>}/>
                        <Route path='/' element={<ProfileContainer/>}/>
                        <Route path='/messages' element={<DialogsContainer/>}/>
                        <Route path='/users' element={<UsersContainer/>}/>
                    </Routes>
                </div>
                <footer className='footer'>x</footer>
            </div>
        </HashRouter>
    );
}

export default App;
