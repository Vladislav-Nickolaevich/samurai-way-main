import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DialogType} from "../Dialogs";

type DialogUsersType = {
    chat: DialogType[]
}
export const DialogUsers = (props:DialogUsersType) => {
    return (
        <div className={s.dialogsItems}>
            {props.chat.map(d => {
                return (
                    <div key={d.id} className={s.dialog}>
                        <NavLink to={'/dialogs/' + d.id}>{d.userName}</NavLink>
                    </div>
                )
            })}
        </div>
    );
};

