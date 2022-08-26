import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div>
            My Posts
            <div>
                <textarea> </textarea>
                <button>Add post</button>
            </div>

            <div className={classes.posts}>
                New post
                <Post message={'Hi! How are you?'} likes={5}/>
                <Post message={'It`s my first post'} likes={15}/>
                <div className={classes.item}>
                    Post2
                </div>
            </div>

        </div>
    )
}

export default MyPosts;