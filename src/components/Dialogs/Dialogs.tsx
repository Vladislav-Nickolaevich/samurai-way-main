import React from 'react';
import s from './Dialogs.module.css'
import {DialogMessage} from "./DialogComponents/DialogMessage/DialogMessage";
import {DialogUsers} from "./DialogComponents/DialogUsers/DialogUsers";
import {DialogType} from "../../redux/messagesPage-reducer";
import {Redirect} from "react-router-dom";

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
    addMessageText: (text: string) => void
    isAuth: boolean
}

export const Dialogs = (props: DialogsPropsType) => {
        return (
                props.isAuth?
                    <div className={s.dialogs}>
                        <DialogUsers
                            state={props.posts.userName}
                        />
                        <DialogMessage
                            posts={props.posts.messages}
                            addMessageText={props.addMessageText}
                        />
                    </div>:
                    <Redirect to='/login'/>
    );
};


