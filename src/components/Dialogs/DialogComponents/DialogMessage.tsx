import React from 'react';
import s from "../Dialogs.module.css";
import {messageType} from "../Dialogs";

type DialogMessageType = {
    messages: messageType[]
}
export const DialogMessage = (props: DialogMessageType) => {
    return (
        <div className={s.messages}>
            {props.messages.map(d => {
                return (
                    <div className={s.message} key={d.id}>
                        {d.message}
                    </div>
                )
            })}
        </div>
    )
};

