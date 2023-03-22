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
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
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
                            className={props.currentPage === p ? user.selectedPage : ''}
                            onClick={(e) => {
                                props.onPageChanged(p)
                            }}
                        >
                                {p + ' '}
                            </span>
                    )
                })}

            </div>
            {props.users.map(u => {
                return (
                    <div key={u.id}>
                        <span>
                            <div>
                                <img src={profileImg} className={user.photo} alt="Упс, ошибка"/>
                            </div>
                            <div>{u.followed
                                ? <button onClick={() => {
                                    props.followed(u.id)
                                }}>Follow</button>
                                : <button onClick={() => {
                                    props.unfollowed(u.id)
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