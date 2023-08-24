import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../../../common/Preloader/Preloader";
import {ProfileUserType} from "../../Profile";
import profileImg from '../../../../assets/images/profileImg.png'
import {ProfileStatus} from './ProfileStatus'

type ProfileInfoType = {
    img: string
    titleError: string
    profile: ProfileUserType
}
export const ProfileInfo = (props:ProfileInfoType) => {
    if(!props.profile.userId){
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img
                    src={props.img}
                    alt={props.titleError}/>
            </div>
            <div className={s.descriptionBlock}>
                <img
                    src={props.profile.photos.large ?? profileImg}
                    alt='Image is not found'
                    style={{width: '70px'}}
                />
                <div>{props.profile.aboutMe}</div>
                <ProfileStatus status={'Hello'}/>
            </div>
        </div>
    );
};

