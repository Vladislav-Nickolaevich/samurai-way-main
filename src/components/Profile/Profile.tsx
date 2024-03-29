import React from 'react';
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


export const Profile = (props: ProfileType) => {
    const profileInfoImg = "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
    const titleError = 'Image is not found'

    return (
        <div>
            <ProfileInfo
                img={profileInfoImg}
                titleError={titleError}
                profile={props.profile}
                status={props.status}
                updateUserStatus={props.updateUserStatus}
            />
            <MyPostsContainer/>
        </div>
    );
};


export type ProfileType = {
    profile: ProfileUserType
    isAuth: boolean
    status: string
    updateUserStatus: (status: string) => void
}
export type ProfileUserType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number | null
    photos: PhotosType
}
type ContactsType = {
    facebook: null | string
    website: null | string
    vk: null | string
    twitter: null | string
    instagram: null | string
    youtube: null | string
    github: null | string
    mainLink: null | string
}
export type PhotosType = {
    small: null | string
    large: null | string
}




