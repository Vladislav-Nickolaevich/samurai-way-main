import React from 'react';
import preloader from '../../assets/images/Hourglass.gif'

const Preloader = () => {
    return (
        <div>
            <img src={preloader} alt='Image is not founded'/>
        </div>
    );
};

export default Preloader;