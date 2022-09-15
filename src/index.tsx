import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './redux/stateJS'
import {addPost} from "./redux/stateJS";

ReactDOM.render(
    <App state={state} addPost={addPost}/>,
  document.getElementById('root')
);