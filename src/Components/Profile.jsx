import React from 'react';
import classes from'./Profile.module.css'
function Profile() {
    return (
        <div className={classes.content}>
            <div>
                <img
                    src={'https://avatars.mds.yandex.net/i?id=27b34dd5c13c8258aa150be326f90bc0-5478040-images-thumbs&n=13'}/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div className={classes.posts}>
                    New post
                    <div className={classes.item}>
                        Post1
                    </div>
                    <div className={classes.item}>
                        Post2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;