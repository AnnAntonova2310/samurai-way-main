import React from 'react';
import classes from './Post.module.css'

type PostPropsType = {
    // id: number;
    message: string;
    likes: number
}

function Post(props: PostPropsType) {
    return (
        <div className={classes.item}>
            <img src={'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'}/>
            {props.message}
            <div>
                <span> {props.likes} like </span>
            </div>
        </div>

    )
}

export default Post;