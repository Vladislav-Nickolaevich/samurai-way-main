import React from 'react';
import profClasses from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

type ProfileType = {
    src: string
}
const Profile = (props: ProfileType) => {
    return (

        <div className={profClasses.content}>
            <div>
                <img
                    src={props.src}
                    alt=""/>

            </div>
            <div>
                ava + descr
                {/*<img src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg" alt=""/>*/}
            </div>
            <MyPosts/>
        </div>

    );
};

export default Profile;