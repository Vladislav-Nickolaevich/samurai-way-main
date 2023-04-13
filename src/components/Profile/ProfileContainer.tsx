import React from 'react';
import axios from "axios";
import {Profile, ProfileUserType} from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profilePage-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";


type ProfileContainerType = {
    setUserProfile: (profile: ProfileUserType) => void
    profile: ProfileUserType
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


        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}

let mapStateToProps = (state: AppRootStateType) => {
    return {
        profile: state.profilePage.profile
    }
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)





