import React from 'react';
import profClasses from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (

        <div className={profClasses.content}>
            <div>
                <img
                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
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