import React from 'react';
import {Profile, ProfileUserType} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profilePage-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


type ProfileContainerType = {
    profile: ProfileUserType
    getUserProfile: (userId: string) => void
    isAuth: boolean
    getUserStatus: (userId: string) => void
    status: string
    updateUserStatus: (status: string) => void
    userId: number  | null
}

type PathParamType = {
    userId: string
}

type PropsType =  RouteComponentProps<PathParamType> & ProfileContainerType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userAuthorizedID = this.props.match.params.userId
        if (!userAuthorizedID) {
            userAuthorizedID = this.props.userId ? this.props.userId.toString() : ''
            if (userAuthorizedID === '') {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userAuthorizedID)
        this.props.getUserStatus(userAuthorizedID)

    }
    render() {
        return <Profile
            profile={this.props.profile}
            isAuth={this.props.isAuth}
            status={this.props.status}
            updateUserStatus={this.props.updateUserStatus}/>
    }
}

let mapStateToProps = (state: AppRootStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        userId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

export default compose<any>(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)




