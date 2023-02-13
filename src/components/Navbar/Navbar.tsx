import React from 'react';
import {FriendsType} from "./Friends/Friends";
import {NavbarContainer} from "./NavbarContainer";

export type SidebarType = {
    title: string
    id: string
    path: string
}
export type NavbarType = {
    sidebar: SidebarType[]
    friends: FriendsType
}


export const Navbar = () => {
    return (
        <NavbarContainer/>
    );
};











// export type SidebarType = {
//     title: string
//     id: string
//     path: string
// }
// export type NavbarType = {
//     sidebar: SidebarType[]
//     friends: FriendsType
// }
// type NavbarArray = {
//     state: NavbarType
// }
//
// export const Navbar = (props:NavbarArray) => {
//     const {state} = props
//     return (
//         <nav className={navClasses.nav}>
//             {state.sidebar.map(el => {
//                 return (
//                     <div className={navClasses.item}  key={el.id}>
//                         <NavLink  to={el.path}>{el.title}</NavLink>
//                     </div>
//                 );
//             })}
//             <Friends title={state.friends.title}
//                      imgFriends={state.friends.imgFriends}/>
//         </nav>
//     );
// };