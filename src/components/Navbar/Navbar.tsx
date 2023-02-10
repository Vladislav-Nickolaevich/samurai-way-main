import React from 'react';
import navClasses from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {Friends, FriendsType} from "./Friends/Friends";

export type SidebarType = {
    title: string
    id: string
    path: string
}
export type NavbarType = {
    sidebar: SidebarType[]
    friends: FriendsType
}
type NavbarArray = {
    state: NavbarType
}

export const Navbar = (props:NavbarArray) => {
    const {state} = props
    return (
        <nav className={navClasses.nav}>
            {state.sidebar.map(el => {
                return (
                    <div className={navClasses.item}  key={el.id}>
                        <NavLink  to={el.path}>{el.title}</NavLink>
                    </div>
                );
            })}
            <Friends title={state.friends.title}
                     imgFriends={state.friends.imgFriends}/>
        </nav>
    );
};
