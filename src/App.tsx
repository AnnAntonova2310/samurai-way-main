import React from 'react';
import './App.css';

function App() {
    return (
        <div className={'app-wrapper'}>
            <header className={'header'}>
                <img
                    src={'https://avatars.mds.yandex.net/i?id=8496ba3621933ead71b1516d035a9bca-4569576-images-thumbs&n=13'}/>
            </header>
            <nav className={'nav'}>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>

            </nav>
            <div className={'content'}>
                <div>
                    <img
                        src={'https://avatars.mds.yandex.net/i?id=27b34dd5c13c8258aa150be326f90bc0-5478040-images-thumbs&n=13'}/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>
                        New post
                        <div>
                            Post1
                        </div>
                        <div>
                            Post2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
