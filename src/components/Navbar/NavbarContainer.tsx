import navClasses from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import {Friends} from "./Friends/Friends";
import React from "react";
import StoreContext from "../../StoreContext";


export const NavbarContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState().navbar
                    return  (
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
                }
            }
            </StoreContext.Consumer>

    );
};