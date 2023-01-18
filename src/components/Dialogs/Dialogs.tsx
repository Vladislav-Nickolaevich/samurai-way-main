import React from 'react';
import s from './Dialogs.module.css'
import {v1} from "uuid";
import {DialogUsers} from "./DialogComponents/DialogUsers";
import {DialogMessage} from "./DialogComponents/DialogMessage";

export type DialogType = {
    id: string
    userName: string
    message: string
}

export const Dialogs = () => {
    const chat: DialogType[] = [
        {id: v1(), userName: 'Vlad', message: 'Hi'},
        {id: v1(), userName: 'Alex', message: 'What is the best country for travelling?'},
        {id: v1(), userName: 'Katya', message: 'I like country with sea'},
        {id: v1(), userName: 'John', message: 'I want to see interesting places'},
    ]
    return (
        <div className={s.dialogs}>
            <DialogUsers chat={chat}/>
            <DialogMessage chat={chat}/>
        </div>
    );
};

