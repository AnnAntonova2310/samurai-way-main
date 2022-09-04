import React from 'react';
import s from './ProfileInfo.module.css'



function ProfileInfo() {
    return (
        <div>
            <div>
                <img
                    src={'https://avatars.mds.yandex.net/i?id=27b34dd5c13c8258aa150be326f90bc0-5478040-images-thumbs&n=13'}/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;