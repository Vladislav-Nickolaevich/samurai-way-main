import React from 'react';
import s from "../Dialogs.module.css";
import {ChatType} from "../Dialogs";

type DialogMessageType = {
    chat: ChatType[]
}
export const DialogMessage = (props: DialogMessageType) => {
    return (
        <div className={s.messages}>
            {props.chat.map(d => {
                return (
                    <div className={s.message} key={d.id}>
                        {d.message}
                    </div>
                )
            })}
        </div>
    )
};

