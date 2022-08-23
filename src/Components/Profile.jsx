import React from 'react';

function Profile() {
    return (
        <div className={'content'}>
            <div>
                <img
                    src={'https://avatars.mds.yandex.net/i?id=27b34dd5c13c8258aa150be326f90bc0-5478040-images-thumbs&n=13'}/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                    <div>
                        Post1
                    </div>
                    <div>
                        Post2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;