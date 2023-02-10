import React from 'react';
import s from './Dialogs.module.css'
import {DialogUsers} from "./DialogComponents/DialogUsers";
import {DialogMessageContainer} from "./DialogComponents/DialogMessageContainer";

export type userNameType = {
    id: number
    userName: string
    img: string
}
export type messageType = {
    id: number
    message: string
}

export type DialogType = {
    messages: messageType[]
    userName: userNameType[]
    newMessageText: string
}

type DataType = {
    state: DialogType
    dispatch: (action: any) => void
}

export const Dialogs = (props:DataType) => {
    return (
        <div className={s.dialogs}>
            <DialogUsers state={props.state}/>
            <DialogMessageContainer
                state={props.state}
                dispatch={props.dispatch}
            />
        </div>
    );
};

