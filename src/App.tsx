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

export type MessageType ={
    id: number
    message: string
}

type AppPropsType = {
    posts: Array<PostType>
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
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
                    <Route path={'/profile'} render={()=> <Profile posts={props.posts}/>}/>
                    <Route exact path={'/dialogs'} component={()=> <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
                    <Route path={'/news'} component={()=> <News/>}/>
                    <Route path={'/music'} component={()=> <Music/>}/>
                    <Route path={'/settings'} component={()=> <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
