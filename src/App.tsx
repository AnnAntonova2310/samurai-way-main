import React from 'react';
import './App.css';

import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Profile from "./Components/Profile";

function App() {
    return (
        <div className={'app-wrapper'}>
            <Header />
            <Navbar />
            <Profile/>
        </div>
    );
}

export default App;
