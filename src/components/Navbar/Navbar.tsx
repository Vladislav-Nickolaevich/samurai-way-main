import React from 'react';
import navClasses from './Navbar.module.css'
import {NavLink} from "react-router-dom";


// style={({isActive}) => isActive? {color: 'red'}:{}}
// classNameActive заменяется на то что сверху????
// type NavbarType = 'Profile' | 'Messages' | 'News' | 'Mucis' | 'Settings'
const Navbar = () => {
    return (

        <nav className={navClasses.nav}>
            <div className={navClasses.item} >
                <NavLink  to="/profile">Profile</NavLink>
            </div>
            <div className={navClasses.item}>
                <NavLink to="/dialogs">Messages</NavLink>
            </div>
            <div className={navClasses.item}>
                <NavLink to="/news">News</NavLink>
            </div>
            <div className={navClasses.item}>
                <NavLink to="/music">Music</NavLink>
            </div>

            <div className={navClasses.item}>
                <NavLink to="/settings">Settings</NavLink>
            </div>
        </nav>

    );
};

export default Navbar;