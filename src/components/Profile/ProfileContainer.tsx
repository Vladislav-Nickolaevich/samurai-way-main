import React from 'react';
import axios from "axios";
import {Profile, ProfileUserType} from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profilePage-reducer";
import {AppRootStateType} from "../../redux/redux-store";


type ProfileContainerType = {
    setUserProfile: (profile: ProfileUserType) => void
    profile: ProfileUserType
}

class ProfileContainer extends React.Component<ProfileContainerType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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
export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)





