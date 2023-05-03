import React from 'react';
import {Profile, ProfileUserType} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profilePage-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";


type ProfileContainerType = {
    profile: ProfileUserType
    getUserProfile: (userId: string) => void
    isAuth: boolean
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
    }
    render() {
        return <Profile profile={this.props.profile} isAuth={this.props.isAuth}/>
    }
}

let mapStateToProps = (state: AppRootStateType) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)





