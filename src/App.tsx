import React from 'react';
import './App.css';

import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {PostType} from "./Components/Profile/MyPosts/MyPosts";
import store, {statePropsType} from "./redux/stateJS";


export type MessageType ={
    id: number
    message: string
}

type AppPropsType = {
    state: statePropsType;
    // addPost: any
    // updateNewPostText: (newText: string)=> void
    dispatch: any
}

export type DialogType = {
    id: number,
    name: string
}

function App(props: AppPropsType) {



    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>

                <div className={'app-wrapper-content'}>
                    <Route path={'/profile'} render={()=> <Profile
                        state={props.state.profilePage}
                        dispatch={props.dispatch}
                        newPostText={props.state.profilePage.newPostText}
                    />}/>
                    <Route exact path={'/dialogs'} component={()=> <Dialogs dispatch={props.dispatch} messagePage={props.state.messagePage}/>}/>
                    <Route path={'/news'} component={()=> <News/>}/>
                    <Route path={'/music'} component={()=> <Music/>}/>
                    <Route path={'/settings'} component={()=> <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
