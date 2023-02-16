import React from 'react';
import {Sidebar, SidebarType} from "./Sidebar";
import {Friends, FriendsType} from "./Friends/Friends";
import navClasses from "./Navbar.module.css";


export type NavbarType = {
    sidebar: SidebarType[]
    friends: FriendsType
}

export const Navbar = (props:NavbarType) => {
    return (
        <nav className={navClasses.nav}>
            <Sidebar sidebar={props.sidebar}/>
            <Friends title={props.friends.title} imgFriends={props.friends.imgFriends}/>
        </nav>
    );
};

