import React from 'react';
import './App.css';

import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";

function App() {
    return (
        <div className={'app-wrapper'}>
            <Header />
            <Navbar />
            {/*<Profile/>*/}
            <div className={'app-wrapper-content'}>
            <Dialogs />
            </div>
        </div>
    );
}

export default App;
