import React from 'react';
import headerClasses from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderType = {
    isAuth: boolean,
    login: string | null
    logoutTC: () => void
}
export const Header = (props: HeaderType) => {

    const headerImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ-DfbDa_apFhyZF4tENuL5UWFIb3lCtHK5f2AqBlFJKf7PDGqVOfrGS73OpU27s975mI&usqp=CAU"
    const titleError = 'Image is not found'

    return (
        <header className={headerClasses.header}>

            <img src={headerImg} alt={titleError}/>
            <div className={headerClasses.login}>
                {props.isAuth ?
                    <div>
                        {props.login} - <button onClick={props.logoutTC}>logout</button>
                    </div> :
                    <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
};

