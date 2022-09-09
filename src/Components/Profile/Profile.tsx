import React from 'react';
import MyPosts, {PostType} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfilePropsType= {
    posts: Array<PostType>
}

function Profile(props: ProfilePropsType) {



    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}

export default Profile;