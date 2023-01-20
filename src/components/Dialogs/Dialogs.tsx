import React from 'react';
import s from './Dialogs.module.css'
import {DialogUsers} from "./DialogComponents/DialogUsers";
import {DialogMessage} from "./DialogComponents/DialogMessage";

export type ChatType = {
    id: string
    userName: string
    message: string
}
type DialogType = {
    chat: ChatType[]
}
export const Dialogs = (props:DialogType) => {

    return (
        <div className={s.dialogs}>
            <DialogUsers chat={props.chat}/>
            <DialogMessage chat={props.chat}/>
        </div>
    );
};

