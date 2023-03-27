import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../../../common/Preloader/Preloader";
import {ProfileUserType} from "../../Profile";

type ProfileInfoType = {
    img: string
    titleError: string
    profile: ProfileUserType
}
export const ProfileInfo = (props:ProfileInfoType) => {
    if(!props.profile.photos.large){
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
                <img src={props.profile.photos.large} alt='Error'/>
                <div>ava + descr</div>
            </div>
        </div>
    );
};

