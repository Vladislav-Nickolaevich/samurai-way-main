import React from 'react';
import './App.css';
import {Route, withRouter} from 'react-router-dom';
import {Settings} from "./components/Settings/Settings";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {path} from "./components/Constans/Constans";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeAppTC} from "./redux/app-reducer";
import {AppRootStateType} from "./redux/redux-store";
import Preloader from "./common/Preloader/Preloader";

class App extends React.Component<AppType> {
    componentDidMount() {
        this.props.initializeAppTC()
    }

    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavbarContainer/>
                <div className='app-wrapper-content'>
                    <Route path={path.DIALOGS} render={() => <DialogsContainer/>}/>
                    <Route path={path.PROFILE} render={() => <ProfileContainer/>}/>
                    <Route path={path.NEWS} render={() => <News/>}/>
                    <Route path={path.MUSIC} render={() => <Music/>}/>
                    <Route path={path.SETTINGS} render={() => <Settings/>}/>
                    <Route path={path.USERS} render={() => <UsersContainer/>}/>
                    <Route path={path.LOGIN} render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppRootStateType) => ({
    initialized: state.app.initialized
})

export default compose<any>(
    withRouter,
    connect(mapStateToProps, {initializeAppTC})
)(App)


type AppType = {
    initializeAppTC: () => void
    initialized: boolean
}