import React from 'react';
import s from "../../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DialogType} from "../../Dialogs";

type DialogUsersType = {
    state: DialogType
}
export const DialogUsers = (props:DialogUsersType) => {

    return (
        <div className={s.dialogsItems}>
            {props.state.userName.map(d => {
                return (
                    <div key={d.id} className={s.active}>
                        <NavLink to={'/dialogs/' + d.id}>
                            <span>{d.userName}</span>
                            <span><img src={d.img}/></span>
                        </NavLink>
                    </div>
                )
            })}
        </div>
    );
};

