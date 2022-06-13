import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export const postsData = [
    {post: "This is my first post! Let's fly!", like: '2 likes'},
    {post: "Oh! This social network is awesome!", like: '2 likes'}
]

ReactDOM.render(
  <React.StrictMode>
    <App  posts={postsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
