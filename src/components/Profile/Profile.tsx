import React from 'react';
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {PostType} from "./MyPosts/Posts/Post";
import {AppRootStateType} from "../../redux/redux-store";

export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}
type ProfileType = {
    state: AppRootStateType
    dispatch: (action: any) => void
}
export const Profile = (props: ProfileType) => {
    const profileInfoImg = "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"

    return (
        <div>
            <ProfileInfo
                img={profileInfoImg}
                titleError={'Image is not found'}
            />
            <MyPostsContainer dispatch={props.dispatch} state={props.state}/>
        </div>

    );
};

