import React from 'react';
import classes from './Profile.module.css'
import Post from "./MyPosts/Post/Post";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


function Profile() {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts id={1} message={'Hi'} likes={10}/>
        </div>
    )
}

export default Profile;