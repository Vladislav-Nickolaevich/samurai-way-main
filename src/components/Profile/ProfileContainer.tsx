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
}

type PathParamType = {
    userId: string
}

type PropsType =  RouteComponentProps<PathParamType> & ProfileContainerType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId || userId === ":userId"){
           userId = this.props.profile.userId ? this.props.profile.userId.toString() : '2'
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }
    render() {
        return <Profile profile={this.props.profile} isAuth={this.props.isAuth} status={this.props.status} updateUserStatus={this.props.updateUserStatus}/>
    }
}

let mapStateToProps = (state: AppRootStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose<any>(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)




