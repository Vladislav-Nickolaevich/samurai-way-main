import React from 'react';
import user from "./Users.module.css";
import profileImg from "../../assets/images/profileImg.png";
import {UserType} from "./UsersAPIComponent";

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
                {pages.map(p => {
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
                                <img src={profileImg} className={user.photo} alt="Упс, ошибка"/>
                            </div>
                            <div>{u.followed
                                ? <button onClick={() => {
                                    followed(u.id)
                                }}>Follow</button>
                                : <button onClick={() => {
                                    unfollowed(u.id)
                                }}>Unfollow</button>}
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