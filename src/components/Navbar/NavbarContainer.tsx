import {Friends} from "./Friends/Friends";
import React from "react";
import StoreContext from "../../StoreContext";
import {Sidebar} from "./Sidebar";


export const NavbarContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState().navbar
                    return  (
                        <>
                            <Sidebar sidebar={state.sidebar} />
                            <Friends title={state.friends.title}
                                     imgFriends={state.friends.imgFriends}/>
                        </>
                    );
                }
            }
            </StoreContext.Consumer>

    );
};