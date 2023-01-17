import React from 'react';
import './App.css';

import Navbar, {NavbarType} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Dialogs, {DialogType} from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";



const App = () => {
    const navbar:NavbarType[] = [
        {path: '/profile', title: 'Profile'},
        {path: '/dialogs', title: 'Messages'},
        {path: '/news', title: 'News'},
        {path: '/music', title: 'Music'},
        {path: '/settings', title: 'Settings'},
    ]

    return (
            <div className='app-wrapper'>
                <Header
                    img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ-DfbDa_apFhyZF4tENuL5UWFIb3lCtHK5f2AqBlFJKf7PDGqVOfrGS73OpU27s975mI&usqp=CAU"}
                    titleError={'Image is not found'}
                />
                <Navbar navbar={navbar}/>
                <div className='app-wrapper-content'>
                        <Route path="/dialogs" component={Dialogs}/>
                        <Route path="/profile" component={Profile}/>
                        <Route path="/news" component={News}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/settings" component={Settings}/>
                </div>
            </div>
    );
}

export default App;
