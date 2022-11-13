import React from 'react';
import navClasses from './Navbar.module.css'

const Navbar = () => {
    return (

        <nav className={navClasses.nav}>
            <div className={navClasses.item}>
                <a href="src/components/Navbar/Navbar">Profile</a>
            </div>
            <div className={navClasses.item}>
                <a href="src/components/Navbar/Navbar">Messages</a>
            </div>
            <div className={navClasses.item}>
                <a href="src/components/Navbar/Navbar">News</a>
            </div>
            <div className={navClasses.item}>
                <a href="src/components/Navbar/Navbar">Music</a>
            </div>

            <div className={navClasses.item}>
                <a href="src/components/Navbar/Navbar">Settings</a>
            </div>
        </nav>

    );
};

export default Navbar;