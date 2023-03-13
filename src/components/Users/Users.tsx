import React from 'react';
import axios from "axios";
import profileImg from '../../assets/images/profileImg.png'

export type LocationType = {
    city: string,
    country: string
}
export type UserType = {
    id: number,
    photoUrl: string,
    followed: boolean,
    name: string,
    status: string,
    location: LocationType
}

type UsersPropsType = {
    users: UserType[]
    followed: (userId: number) => void
    unfollowed: (userId: number) => void
    setUsers: (users: UserType[]) => void
}


export const Users = (props: UsersPropsType) => {
    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    props.setUsers(response.data.items)
                })
        }
    }
    return (
        <>
            <button onClick={getUsers}>Get users</button>
            {props.users.map(u => {
                return (
                    <div key={u.id}>
                        <span>
                            <div>
                                <img src={profileImg} style={{width: '60px'}} alt="Упс, ошибка"/>
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
                                {/*<div>{u.status}</div>*/}
                            </span>
                            <span>
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.city'}</div>
                            </span>
                        </span>
                    </div>
                )
            })}
        </>
    );
};

