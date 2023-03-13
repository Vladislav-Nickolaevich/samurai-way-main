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


class Users extends React.Component<UsersPropsType>{
    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    this.props.setUsers(response.data.items)
                })
        }
    }
    render(){
        return (
            <div>
                <button onClick={this.getUsers}>Get users</button>
                {this.props.users.map(u => {
                    return (
                        <div key={u.id}>
                        <span>
                            <div>
                                <img src={profileImg} style={{width: '60px'}} alt="Упс, ошибка"/>
                            </div>
                            <div>{u.followed
                                ? <button onClick={() => {
                                    this.props.followed(u.id)
                                }}>Follow</button>
                                : <button onClick={() => {
                                    this.props.unfollowed(u.id)
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
    }
}

export default Users


