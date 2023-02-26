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
    location: LocationType
}

type UsersPropsType = {
    users: UserType[]
    followed: (userId: string) => void
    unfollowed: (userId: string) => void
    setUsers: (users: UserType[]) => void
}


export const Users = (props: UsersPropsType) => {
    let img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/John_Cena_July_2018.jpg/1200px-John_Cena_July_2018.jpg'
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: v1(), photoUrl: img, followed: false, fullName: 'George', status: 'Successful man',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: v1(), photoUrl: img, followed: true, fullName: 'John', status: 'Dreamer..',
                    location: {city: 'Los Angeles', country: 'USA'}
                },
                {
                    id: v1(), photoUrl: img, followed: false, fullName: 'Viktoria', status: 'Woman with the right habits',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: v1(), photoUrl: img, followed: true, fullName: 'Ann', status: 'Just Ann:)',
                    location: {city: 'Brest', country: 'Belarus'}
                },
            ])
    }
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

