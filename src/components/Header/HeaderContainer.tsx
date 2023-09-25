import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {logoutTC} from "../../redux/auth-reducer";

type HeaderContainerType = {logoutTC: () => void} & {
    isAuth: boolean
    login: string | null
}

class HeaderContainer extends  React.Component<HeaderContainerType> {
    render(){
        return <Header {...this.props}/>
    }
}
const mapStateToProps = (state: AppRootStateType) => {
    return{
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {logoutTC})(HeaderContainer)