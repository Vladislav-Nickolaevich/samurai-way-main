import React from 'react';

export type LocationType = {
    city: string,
    country: string
}
export type UserType = {
    id: string,
    followed: boolean,
    fullName: string,
    status: string,
    location:LocationType
}

type UsersPropsType = {
    users: UserType[]
    follow: (userId: string) => void
    unfollow: (userId:string) => void
    setUsers: (users:UserType) => void
}


export const Users = (props: UsersPropsType) => {
    return (
        <>
            {/*{props.users.map(u => {*/}
            {/*    return (*/}
            {/*        <div key={u.id}>{u.fullName}</div>*/}
            {/*    )*/}
            {/*})}*/}
        </>
    );
};

