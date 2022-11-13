import React from 'react';

type HeaderType = {
    img: string
}

const Header = () => {
    return (
        <header className='header'>
            <img src="https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg" alt=""/>
        </header>
    );
};

export default Header;