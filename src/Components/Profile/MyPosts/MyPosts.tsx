import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";



const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hi! How are you?', likes: 5},
        {id: 2, message: 'It`s my first post', likes: 15},
    ]

    let postsElement = posts.map(p=> <Post message={p.message} likes={p.likes}/>)

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

                    {postsElement}

                </div>
            </div>
        </div>
    )
}

export default MyPosts;