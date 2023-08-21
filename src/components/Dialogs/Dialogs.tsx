import React from 'react';
import s from './Dialogs.module.css'
import {DialogMessage} from "./DialogComponents/DialogMessage/DialogMessage";
import {DialogUsers} from "./DialogComponents/DialogUsers/DialogUsers";
import {DialogType} from "../../redux/messagesPage-reducer";

export type userNameType = {
    id: number
    userName: string
    img: string
}
export type messageType = {
    id: string
    message: string
}

type DialogsPropsType = {
    posts: DialogType
    addMessageText: () => void
    updateNewMessageText: (text: string) => void
    isAuth: boolean
}

export const Dialogs = (props: DialogsPropsType) => {
        return (
        <div className={s.dialogs}>
            <DialogUsers
                state={props.posts.userName}
            />
            <DialogMessage
                posts={props.posts.messages}
                updateNewMessageText={props.updateNewMessageText}
                addMessageText={props.addMessageText}
                newDialogText={props.posts.newMessageText}
            />
        </div>
    );
};


