import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

export type PostType = {
    id: number,
    message: string,
    likes: number
}

type MyPostsPropsType = {
    posts: Array<PostType>

}

const MyPosts = (props: MyPostsPropsType) => {


    let postsElement =
        props.posts.map(p => <Post message={p.message} likes={p.likes}/>)

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