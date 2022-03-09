import React from 'react';
import './App.css';
import { Header } from './components/header';
import { Main } from './components/main';
import { Nav } from './components/nav';


function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <Main />
      <footer className='footer'></footer>
    </div>
  );
}

export default App;
