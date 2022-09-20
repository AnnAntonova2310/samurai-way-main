import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/stateJS';
import App from './App';
import {statePropsType} from './redux/stateJS'


let rerenderEntireTree =(state: statePropsType)=> {
    ReactDOM.render(
        <App state={state} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>,
        document.getElementById('root')
    );
}



rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)