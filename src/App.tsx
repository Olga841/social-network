import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Nav} from './components/Nav';
import {BrowserRouter, HashRouter, Navigate, Route, Routes, useParams} from "react-router-dom";
import {ProfileContainer} from "./components/ProfileContainer";
import {DialogsContainer} from "./components/DialogsContainer";
import {UsersContainer} from "./components/UsersContainer";
import HeaderContainer from "./components/HeaderContainer";
import {ProfileInfo} from "./components/ProfileInfo";
import {Profile} from "./components/Profile";
import {useSelector} from "react-redux";
import {AppStateType} from "./components/redux/redux-store";


function App() {
    const userId = useSelector<AppStateType, number>(state => state.auth.data.id)
    console.log(userId)
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>

                <Nav/>
                <div className="content">
                    <Routes>
                        {/*<Route path='/' element={<Navigate to={"/profile/" + userId}/>}/>*/}
                        <Route path='/profile' element={<ProfileContainer/>}>
                            {/*<Route path=':me' element={<ProfileContainer/>}/>*/}
                            <Route path=':userId' element={<ProfileContainer/>}/>
                        </Route>
                        <Route path='/messages' element={<DialogsContainer/>}/>
                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path='/login' element={<ProfileContainer/>}/>
                    </Routes>
                </div>
                <footer className='footer'>x</footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
