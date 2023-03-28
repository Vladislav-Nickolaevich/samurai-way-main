import React from 'react';
import headerClasses from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderType = {
    isAuth: boolean,
    login: string | null
}
export const Header = (props: HeaderType) => {

    const headerImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ-DfbDa_apFhyZF4tENuL5UWFIb3lCtHK5f2AqBlFJKf7PDGqVOfrGS73OpU27s975mI&usqp=CAU"
    const titleError = 'Image is not found'


    return (
        <header className={headerClasses.header}>
            <img src={headerImg} alt={titleError}/>
            <div>
                <NavLink className={headerClasses.login} to={'/login'}>
                    {props.isAuth ?
                        props.login :
                        'Login'
                    }
                </NavLink>
            </div>
        </header>
    );
};

