import React from 'react';
import headerClasses from './Header.module.css'

type HeaderType = {
    img: string
}

const Header = () => {
    return (
        <header className={headerClasses.header}>
            <img src="https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg" alt=""/>
        </header>
    );
};

export default Header;