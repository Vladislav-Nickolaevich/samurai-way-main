import React from 'react';
import user from "./Users.module.css";
import profileImg from "../../assets/images/profileImg.png";
import {UserType} from "./UsersContainer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: UserType[]
    followed: (userId: number) => void
    unfollowed: (userId: number) => void
}

const Users = (props: UsersPropsType) => {
    const {totalUsersCount, users, pageSize, onPageChanged, currentPage, unfollowed, followed} = props
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.slice(0, 50).map(p => {
                    return (
                        <span
                            key={p}
                            className={currentPage === p ? user.selectedPage : ''}
                            onClick={(e) => {
                                onPageChanged(p)
                            }}
                        >
                                {p + ' '}
                            </span>
                    )
                })}

            </div>
            {users.map(u => {
                return (
                    <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : profileImg}
                                         className={user.photo} alt="Image is not found"/>
                                </NavLink>
                            </div>
                            <div>
                                {u.followed
                                ? <button
                                    onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': 'db3b9d4e-6f70-4aac-89fe-8979d865447d'
                                            }
                                        })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    unfollowed(u.id)
                                                }
                                            })
                                    }}>
                                    Unfollow
                                </button>:
                                    <button onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': 'db3b9d4e-6f70-4aac-89fe-8979d865447d'
                                            }
                                        })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    followed(u.id)
                                                }
                                            })
                                    }}>
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
                )
            })}
        </div>
    );
};

export default Users;