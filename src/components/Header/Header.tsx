import React from 'react';
import headerClasses from './Header.module.css'

type HeaderType = {
    img: string
    titleError: string
}

export const Header = (props: HeaderType) => {
    return (
        <header className={headerClasses.header}>
            <img src={props.img} alt={props.titleError}/>
        </header>
    );
};

