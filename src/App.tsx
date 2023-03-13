import React from 'react';
import './App.css';
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {Route} from 'react-router-dom';
import {Settings} from "./components/Settings/Settings";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {path} from "./components/Constans/Constans";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";


const App = () => {

    const headerImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ-DfbDa_apFhyZF4tENuL5UWFIb3lCtHK5f2AqBlFJKf7PDGqVOfrGS73OpU27s975mI&usqp=CAU"
    const titleError = 'Image is not found'

    return (
        <div className='app-wrapper'>
            <Header img={headerImg} titleError={titleError}/>
            <NavbarContainer/>
            <div className='app-wrapper-content'>
                <Route path={path.DIALOGS} render={() => <DialogsContainer/>}/>
                <Route path={path.PROFILE} render={() => <Profile/>}/>
                <Route path={path.NEWS} render={() => <News/>}/>
                <Route path={path.MUSIC} render={() => <Music/>}/>
                <Route path={path.SETTINGS} render={() => <Settings/>}/>
                <Route path={path.USERS} render={() => <UsersContainer/>}/>
            </div>
        </div>
    );
}

export default App;
