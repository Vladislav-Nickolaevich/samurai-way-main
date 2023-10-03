import React, {FC} from 'react';
import {UserContainerType} from "./UsersContainer";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User";


const Users: FC<UsersPropsType> = ({users, unfollow, follow, followingInProgress, pageSize, onPageChanged, currentPage, totalUsersCount}) => {
    return (
        <div>
            <Paginator
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanged={onPageChanged}
            />
            {users.map(u => <User
                    user={u}
                    key={u.id}
                    follow={follow}
                    unfollow={unfollow}
                    followingInProgress={followingInProgress}
                />
            )}
        </div>
    );
};

export default Users;


type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: UserContainerType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: Array<number>
}