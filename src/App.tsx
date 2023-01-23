import React from 'react';
import './App.css';

import {Navbar, NavbarType} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/Header/Header";
import {Route} from 'react-router-dom';
import {Settings} from "./components/Settings/Settings";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Dialogs, messageType, userNameType} from "./components/Dialogs/Dialogs";
import {path} from "./components/Constans/Constans";
import {PostType} from "./components/Profile/MyPosts/Posts/Post";


type AppType = {
    posts: PostType[]
    navbar: NavbarType[]
    message: messageType[]
    userName: userNameType[]
}
const App = (props:AppType) => {
    const {posts, navbar, message, userName} = props

    const headerImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ-DfbDa_apFhyZF4tENuL5UWFIb3lCtHK5f2AqBlFJKf7PDGqVOfrGS73OpU27s975mI&usqp=CAU"

    return (
        <div className='app-wrapper'>
            <Header img={headerImg} titleError={'Image is not found'}/>

            <Navbar navbar={navbar}/>

            <div className='app-wrapper-content'>
                <Route path={path.DIALOGS} render={() => <Dialogs messages={message} userName={userName}/>}/>
                <Route path={path.PROFILE} render={() => <Profile posts={posts}/>}/>
                <Route path={path.NEWS} render={() => <News/>}/>
                <Route path={path.MUSIC} render={() => <Music/>}/>
                <Route path={path.SETTINGS} render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
