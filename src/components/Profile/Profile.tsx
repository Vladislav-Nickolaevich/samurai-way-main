import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/State";

type ProfileType = {
    posts: ProfilePageType
    addPost: () => void
    updateNewPostText: (newText: string) => void
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
                posts={props.posts.posts}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
            />
        </div>

    );
};

