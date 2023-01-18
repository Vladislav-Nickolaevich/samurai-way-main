import React from 'react';
import navClasses from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export type NavbarType = {
    path: string
    title: string
    id: string
}
type NavbarArray = {
    navbar: NavbarType[]
}
const Navbar = (props:NavbarArray) => {
    return (
        <nav className={navClasses.nav}>
            {props.navbar.map(el => {
                return (
                    <div key={el.id} className={navClasses.item} >
                        <NavLink  to={el.path}>{el.title}</NavLink>
                    </div>
                );
            })}
        </nav>
    );
};

export default Navbar;