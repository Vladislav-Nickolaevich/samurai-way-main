import React from 'react';
import s from './ProfileInfo.module.css'

type ProfileInfoType = {
    img: string
    titleError: string
}
export const ProfileInfo = (props:ProfileInfoType) => {
    return (
        <div>
            <div>
                <img
                    src={props.img}
                    alt={props.titleError}/>
            </div>
            <div className={s.descriptionBlock}>
                ava + descr
            </div>
        </div>
    );
};

