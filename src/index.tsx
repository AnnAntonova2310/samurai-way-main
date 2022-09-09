import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let posts = [
    {id: 1, message: 'Hi! How are you?', likes: 5},
    {id: 2, message: 'It`s my first post', likes: 15},
]

let dialogsData = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Taison'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Valera'},
    {id: 5, name: 'Victor'},
    {id: 6, name: 'Igor'},

]

let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Good evening!'},
]

ReactDOM.render(



    <App posts={posts} dialogsData={dialogsData} messagesData={messagesData}/>,
  document.getElementById('root')
);