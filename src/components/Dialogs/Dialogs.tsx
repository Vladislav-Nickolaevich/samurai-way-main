import React from 'react';
import s from  './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    <NavLink to='vlad'>Vlad</NavLink>
                    </div>
                <div className={s.dialog}>
                    <NavLink to='alex'>Alex</NavLink>
                </div>
                <div className={s.dialog  + ' ' + s.active}>
                     <NavLink to='katya'>Katya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='john'>John</NavLink>
                    </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>What is the best country for travelling?</div>
                <div className={s.message}>I like country with sea</div>
                <div className={s.message}>I want to see interesting places</div>
            </div>
        </div>
    );
};

export default Dialogs;