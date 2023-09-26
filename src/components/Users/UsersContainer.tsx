import React from 'react'
import {connect} from "react-redux";
import {followTC, getUsersTC, setCurrentPage, unfollowTC} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import {AppRootStateType} from "../../redux/redux-store";
import {PhotosType} from "../Profile/Profile";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";

class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersTC(pageNumber, this.props.pageSize)
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
                follow={this.props.followTC}
                unfollow={this.props.unfollowTC}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        followingInProgress: getFollowingInProgress(state),
    }
}


export default compose<any>(
    connect(
        mapStateToProps,
        {followTC, unfollowTC,
            setCurrentPage,
            getUsersTC}
    )
)(UsersContainer)



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
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void
    setCurrentPage: (pageNumber: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    getUsersTC: (currentPage: number, pageSize: number) => void
}