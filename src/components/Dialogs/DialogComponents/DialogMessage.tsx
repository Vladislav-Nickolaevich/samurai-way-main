import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DialogType} from "../Dialogs";

type DialogMessageType = {
    chat: DialogType[]
}
export const DialogMessage = (props:DialogMessageType) => {
    return (
        <div className={s.messages}>
            {props.chat.map(el => {
                return (
                    <div className={s.message} key={el.id}>
                        {el.message}
                    </div>
                )
            })}
        </div>
    )
};

