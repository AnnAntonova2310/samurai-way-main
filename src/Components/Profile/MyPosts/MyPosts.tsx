import React, {DetailedHTMLProps, TextareaHTMLAttributes} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

export type PostType = {
    id: number,
    message: string,
    likes: number
}

type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: ()=> void
    newPostText: string
    updateNewPostText: (newText: string)=> void
}

const MyPosts = (props: MyPostsPropsType) => {


    let postsElement =
        props.posts.map(p => <Post message={p.message} likes={p.likes}/>)

    let newPostElement = React.createRef<any>();
    let addPost = () => {
        props.addPost();

    }

    const onPostChange = () => {
        let text = newPostElement.current.value;
       props.updateNewPostText(text)
    }

    return (

        <div>
            <h3> My Posts </h3>
            <div className={s.postsBlock}>
                <div>
                    <textarea  onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>

                <div className={s.posts}>

                    {postsElement}

                </div>
            </div>
        </div>
    )
}

export default MyPosts;