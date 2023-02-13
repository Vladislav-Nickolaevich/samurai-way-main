import React, {ChangeEvent} from 'react';
import s from "../Dialogs.module.css";
import {DialogType} from "../Dialogs";

type DialogMessageType = {
    posts: DialogType
    updateNewMessageText: (text: string) => void
    addMessageText: () => void
}
export const DialogMessage = (props: DialogMessageType) => {
    const {posts, updateNewMessageText, addMessageText} = props
    let newMessage = posts.newMessageText
    const addMessage = () => {
        if (newMessage.trim() !== '') {
            addMessageText()
        }
    }
    const onChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessage = e.target?.value
        if (newMessage) {
            updateNewMessageText(newMessage)
        }
    }
    return (
        <div className={s.messages}>
            {posts.messages.map(d => {
                return (
                    <div className={s.message} key={d.id}>
                        {d.message}
                    </div>
                )
            })}
            <textarea value={newMessage} onChange={onChangeTextarea}></textarea>
            <button onClick={addMessage}>Send</button>
        </div>
    )
};

