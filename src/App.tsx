import React from 'react';
import './App.css';

import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Dialogs from './components/Dialogs/Dialogs';


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header img={"https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg"}/>
            <Navbar/>
            <div className='app-wrapper-content'>
                {/*<Dialogs/>*/}
                <Profile src={"https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"}/>
            </div>

        </div>
    );
}

export default App;
