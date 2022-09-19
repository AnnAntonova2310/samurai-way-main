import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {statePropsType, subscribe} from './redux/stateJS'
import state, {addPost, updateNewPostText} from './redux/stateJS';


let rerenderEntireTree =(state: statePropsType)=> {
    ReactDOM.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>,
        document.getElementById('root')
    );
}



rerenderEntireTree(state)
subscribe(rerenderEntireTree)