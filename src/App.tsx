import React from 'react';
import './App.css';
import {Nav} from './components/Nav';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {useSelector} from "react-redux";
import {AppStateType} from "./components/redux/redux-store";


function App() {
    const userId = useSelector<AppStateType, number | null>(state => state.auth.response.data.id)
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
                            <Route path=':' element={<ProfileContainer/>}/>
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
