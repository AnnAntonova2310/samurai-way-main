import React from 'react';
import classes from './Profile.module.css'
import Post from "./MyPosts/Post/Post";
import MyPosts from "./MyPosts/MyPosts";


function Profile() {
    return (
        <div className={classes.content}>
            <div>
                <img
                    src={'https://avatars.mds.yandex.net/i?id=27b34dd5c13c8258aa150be326f90bc0-5478040-images-thumbs&n=13'}/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;