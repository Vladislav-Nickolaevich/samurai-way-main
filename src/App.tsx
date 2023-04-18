import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import {Settings} from "./components/Settings/Settings";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {path} from "./components/Constans/Constans";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = () => {
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
            </div>
        </div>
    );
}

export default App;
