import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";



const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hi! How are you?', likes: 5},
        {id: 2, message: 'It`s my first post', likes: 15},
    ]

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
                    <Post message={postData[0].message} likes={postData[0].likes}/>
                    <Post message={postData[1].message} likes={postData[1].likes}/>
                    <div className={s.item}>
                        Post2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPosts;