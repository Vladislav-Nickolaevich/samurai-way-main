import React from 'react';
import {connect} from "react-redux";
import {Users, UserType} from "./Users";
import {AppRootStateType} from "../../redux/redux-store";
import {Action, Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";

const mapStateToProps = (state: AppRootStateType) => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
    return {
        followed: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollowed: (userId:string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users:UserType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);