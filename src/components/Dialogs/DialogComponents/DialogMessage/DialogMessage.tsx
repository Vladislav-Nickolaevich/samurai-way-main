import React from 'react';
import s from "../../Dialogs.module.css";
import {messageType} from "../../Dialogs";
import {Field, reduxForm} from "redux-form";

type DialogMessageType = {
    posts: messageType[]
    addMessageText: (text: string) => void
}
type AddMessageDialogType = {
    MessageDialogs: string
}

export const DialogMessage = (props: DialogMessageType) => {
    const {posts, addMessageText} = props
    const addMessage = (text: string) => {
        if (text.trim() !== '') {
            addMessageText(text)
        }
    }

    const onSubmit = (mes: AddMessageDialogType) => {
        addMessage(mes.MessageDialogs)
    }
    return (
        <div className={s.messages}>
            {posts.map(d => {
                return (
                    <div className={s.message} key={d.id}>
                        {d.message}
                    </div>
                )
            })}
            <AddMessageFormRedux onSubmit={onSubmit}/>
        </div>
    )
};


const AddNewMyPostForm = (props: any) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'}
                       name={'MessageDialogs'}
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>

    )
}
const AddMessageFormRedux = reduxForm<AddMessageDialogType>({form: 'AddMessageForm'})(AddNewMyPostForm)