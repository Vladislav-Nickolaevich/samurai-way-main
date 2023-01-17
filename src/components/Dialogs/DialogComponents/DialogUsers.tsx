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
            {props.chat.map(el => {
                return (
                    <div key={el.id} className={s.dialog}>
                        <NavLink to={'/dialogs/' + el.id}>{el.userName}</NavLink>
                    </div>
                )
            })}
        </div>
    );
};

