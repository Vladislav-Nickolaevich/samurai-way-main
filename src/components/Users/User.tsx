import React, {FC} from 'react';
import userPhoto from "./Users.module.css"
import profileImg from "../../assets/images/profileImg.png";
import {UserContainerType} from "./UsersContainer";
import {NavLink} from "react-router-dom";

const Users: FC<UserPropsType> = ({unfollow, follow, followingInProgress, user}) => {
    let u = user
    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : profileImg}
                             className={userPhoto.photo} alt="Image is not found"
                        />
                    </NavLink>
                </div>
                <div>
                    {u.followed?
                        <button disabled={followingInProgress.some(id => id === u.id)}
                                  onClick={() => {unfollow(u.id)}}
                        >
                            Unfollow
                        </button> :
                        <button disabled={followingInProgress.some(id => id === u.id)}
                                onClick={() => {follow(u.id)}}
                        >
                            Follow
                        </button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                </span>
                <span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>
            </span>
        </div>

    );
};

export default Users;


type UserPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: Array<number>
    user: UserContainerType
}
