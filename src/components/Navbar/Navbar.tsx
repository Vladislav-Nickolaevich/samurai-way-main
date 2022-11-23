import React from 'react';
import navClasses from './Navbar.module.css'



// type NavbarType = 'Profile' | 'Messages' | 'News' | 'Mucis' | 'Settings'
const Navbar = () => {
    return (

        <nav className={navClasses.nav}>
            <div className={navClasses.item}>
                <a href="/profile">Profile</a>
            </div>
            <div className={navClasses.item}>
                <a href="/dialogs">Messages</a>
            </div>
            <div className={navClasses.item}>
                <a href="/news">News</a>
            </div>
            <div className={navClasses.item}>
                <a href="/music">Music</a>
            </div>

            <div className={navClasses.item}>
                <a href="/settings">Settings</a>
            </div>
        </nav>

    );
};

export default Navbar;