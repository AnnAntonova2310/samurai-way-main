import React from 'react';
import MyPosts, {PostType} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfilePropsType= {
    state: {
        posts: Array<PostType>
    }

}

function Profile(props: ProfilePropsType) {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}/>
        </div>
    )
}

export default Profile;