import React from 'react';
import './App.css';

import {Navbar, NavbarType} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {Route} from 'react-router-dom';
import {Settings}from "./components/Settings/Settings";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {v1} from "uuid";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {path} from "./components/Constans/Constans";


const App = () => {
    const navbar: NavbarType[] = [
        {id: v1(), path: path.PROFILE, title: 'Profile'},
        {id: v1(), path: path.DIALOGS, title: 'Messages'},
        {id: v1(), path: path.NEWS, title: 'News'},
        {id: v1(), path: path.MUSIC, title: 'Music'},
        {id: v1(), path: path.SETTINGS, title: 'Settings'},
    ]

    return (
        <div className='app-wrapper'>
            <Header
                img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ-DfbDa_apFhyZF4tENuL5UWFIb3lCtHK5f2AqBlFJKf7PDGqVOfrGS73OpU27s975mI&usqp=CAU"}
                titleError={'Image is not found'}
            />
            <Navbar navbar={navbar}/>
            <div className='app-wrapper-content'>
                <Route path={path.DIALOGS} component={Dialogs}/>
                <Route path={path.PROFILE} component={Profile}/>
                <Route path={path.NEWS} component={News}/>
                <Route path={path.MUSIC} component={Music}/>
                <Route path={path.SETTINGS} component={Settings}/>
            </div>
        </div>
    );
}

export default App;
