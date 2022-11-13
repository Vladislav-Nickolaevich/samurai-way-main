import React from 'react';
import navClasses from './Navbar.module.css'

const Navbar = () => {
    return (

        <nav className={navClasses.nav}>
            <div className={navClasses.item}>
                <a href="">Profile</a>
            </div>
            <div className={navClasses.item}>
                <a href="">Messages</a>
            </div>
            <div className={navClasses.item}>
                <a href="">News</a>
            </div>
            <div className={navClasses.item}>
                <a href="">Music</a>
            </div>

            <div className={navClasses.item}>
                <a href="">Settings</a>
            </div>
        </nav>

    );
};

export default Navbar;