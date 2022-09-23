import React from 'react';
import MyPosts, {PostType} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfilePropsType= {
    state: {
        posts: Array<PostType>
    }
    // addPost: ()=> void
    newPostText: string
    // updateNewPostText: (newText: string)=> void
    dispatch: any

}

function Profile(props: ProfilePropsType) {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.state.posts}
                dispatch={props.dispatch}
                newPostText={props.newPostText}
            />
        </div>
    )
}

export default Profile;