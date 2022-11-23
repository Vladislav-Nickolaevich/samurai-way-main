import React from 'react';
import './App.css';

import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Dialogs from './components/Dialogs/Dialogs';
import {Route, Routes} from 'react-router-dom';
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header img={"https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg"}/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/dialogs" element={<Dialogs/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>

        </div>
    );
}

export default App;
