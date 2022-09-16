import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addPost, statePropsType} from "./redux/stateJS";



export let rerenderEntireTree =(props: statePropsType)=> {
    ReactDOM.render(
        <App state={state} addPost={addPost}/>,
        document.getElementById('root')
    );
}

