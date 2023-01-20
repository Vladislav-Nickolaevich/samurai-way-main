import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {PostType} from "./MyPosts/Posts/Post";

type ProfileType = {
    posts: PostType[]
}
export const Profile = (props: ProfileType) => {
    const profileInfoImg = "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"

    return (
        <div>
            <ProfileInfo
                img={profileInfoImg}
                titleError={'Image is not found'}
            />
            <MyPosts
                title={'My posts'}
                buttonAdd={'Add post'}
                posts={props.posts}
            />
        </div>

    );
};

