import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {authMe} from "../../redux/auth-reducer";

type HeaderContainerType = {
    isAuth: boolean
    login: string | null
    authMe: () => void
}

class HeaderContainer extends  React.Component<HeaderContainerType> {

    componentDidMount() {
        this.props.authMe()
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

export default connect(mapStateToProps, {authMe})(HeaderContainer)