import React from 'react';
import s from "../../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {userNameType} from "../../Dialogs";

type DialogUsersType = {
    state: userNameType[]
}
export const DialogUsers = (props:DialogUsersType) => {

    return (
        <div className={s.dialogsItems}>
            {props.state.map(d => {
                return (
                    <div key={d.id} className={s.active}>
                        <NavLink to={'/dialogs/' + d.id}>
                            <span>
                                <img src={d.img}/>
                            </span>
                            <span> {d.userName}</span>
                        </NavLink>
                    </div>
                )
            })}
        </div>
    );
};

