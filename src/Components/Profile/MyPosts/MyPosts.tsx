import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div>
            <h3> My Posts </h3>
            <div className={s.postsBlock}>
                <div>
                    <textarea> </textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>

                <div className={s.posts}>
                    New post
                    <Post message={'Hi! How are you?'} likes={5}/>
                    <Post message={'It`s my first post'} likes={15}/>
                    <div className={s.item}>
                        Post2
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MyPosts;