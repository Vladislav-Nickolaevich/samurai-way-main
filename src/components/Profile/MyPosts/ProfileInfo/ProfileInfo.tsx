import React, {FC} from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../../../common/Preloader/Preloader";
import {ProfileUserType} from "../../Profile";
import profileImg from '../../../../assets/images/profileImg.png'
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

type ProfileInfoType = {
    img: string
    titleError: string
    profile: ProfileUserType
    status: string
    updateUserStatus: (status: string) => void
}
export const ProfileInfo: FC<ProfileInfoType> = ({img, profile, updateUserStatus, status, titleError}) => {
    if(!profile.userId){
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    src={img}
                    alt={titleError}/>
            </div>
            <div className={s.descriptionBlock}>
                <img
                    src={profile.photos.large ?? profileImg}
                    alt='Image is not found'
                    style={{width: '70px'}}
                />
                <div>{profile.aboutMe}</div>
                <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
            </div>
        </div>
    );
};

