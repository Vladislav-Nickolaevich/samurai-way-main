import React from 'react'
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching, toggleIsFollowingProgress,
    unfollow
} from "../../redux/users-reducer";

import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import {AppRootStateType} from "../../redux/redux-store";
import {PhotosType} from "../Profile/Profile";
import {userAPI} from "../../api/api";

export type LocationType = {
    city: string,
    country: string
}
export type UserType = {
    id: number,
    photos: PhotosType
    followed: boolean,
    name: string,
    status: string,
    location: LocationType
}
type UsersPropsType = {
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (count: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    toggleIsFetching: (isFetching: boolean) => void
    isFetching: boolean

    followingInProgress: Array<number>
    toggleIsFollowingProgress: (isFetching: boolean,userId: number ) => void
}


class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        userAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                        this.props.toggleIsFetching(false)
                        this.props.setUsers(data.items)
                        this.props.setTotalUsersCount(data.totalCount)
                    })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        userAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                followed={this.props.follow}
                unfollowed={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
                toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                isFetching={this.props.isFetching}
            />
        </>
    }
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleIsFollowingProgress
})(UsersContainer);