import React from 'react';
import s from './Dialogs.module.css'
import {DialogUsers} from "./DialogComponents/DialogUsers";
import {DialogMessage} from "./DialogComponents/DialogMessage";

export type messageType = {
    id: number
    message: string
}
export type userNameType = {
    id: number
    userName: string
}
type DialogType = {
    messages: messageType[]
    userName: userNameType[]

}
export const Dialogs = (props:DialogType) => {
    return (
        <div className={s.dialogs}>
            <DialogUsers userName={props.userName}/>
            <DialogMessage messages={props.messages}/>
        </div>
    );
};

