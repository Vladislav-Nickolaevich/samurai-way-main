import React from 'react';
import navClasses from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export type NavbarType = {
    title: string
    id: string
    path: string
}
type NavbarArray = {
    navbar: NavbarType[]
}
export const Navbar = (props:NavbarArray) => {
    return (
        <nav className={navClasses.nav}>
            {props.navbar.map(el => {
                return (
                    <div className={navClasses.item}  key={el.id}>
                        <NavLink  to={el.path}>{el.title}</NavLink>
                    </div>
                );
            })}
        </nav>
    );
};
