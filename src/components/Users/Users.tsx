import React from 'react';
import {v1} from "uuid";


export type LocationType = {
    city: string,
    country: string
}
export type UserType = {
    id: string,
    photoUrl: string,
    followed: boolean,
    fullName: string,
    status: string,
    location:LocationType
}

type UsersPropsType = {
    users: UserType[]
    followed: (userId: string) => void
    unfollowed: (userId:string) => void
    setUsers: (users:UserType[]) => void
}


export const Users = (props: UsersPropsType) => {

    // props.setUsers(
    //     [{
    //         id: v1(), photoUrl: 'img', followed: false, fullName: 'George', status: 'Successful man',
    //         location: {city: 'Minsk', country: 'Belarus'}
    //     }]
    // )
    return (
        <>
            {props.users.map(u => {
                return (
                    <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photoUrl}/>
                            </div>
                            <div>{u.followed
                                ? <button onClick={() => {props.followed(u.id)}}>Follow</button>
                                : <button onClick={() => {props.unfollowed(u.id)}}>Unfollow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </span>
                        </span>
                    </div>
                )
            })}
        </>
    );
};

