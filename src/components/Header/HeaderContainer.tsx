import React from 'react';
import axios from "axios";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {DataAuthType, setAuthUserData} from "../../redux/auth-reducer";

type HeaderContainerType = {
    setAuthUserData: (data: DataAuthType) => void
    isAuth: boolean
    login: string | null
}

class HeaderContainer extends  React.Component<HeaderContainerType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true

        })
            .then(response => {
                if(response.data.resultCode === 0){
                    this.props.setAuthUserData(response.data.data)
                }
            })
    }

    render(){
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>
    }
}
const mapStateToProps = (state: AppRootStateType) => {
    return{
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)