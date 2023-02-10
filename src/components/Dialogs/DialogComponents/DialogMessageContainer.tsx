import React, {ChangeEvent} from 'react';
import {sendMessageDialogs, updateMessageDialogs} from "../../../redux/messagesPage-reducer";
import {DialogType} from "../Dialogs";
import {DialogMessage} from "./DialogMessage";

type DialogMessageContainerType = {
    state: DialogType
    dispatch: (action: any) => void
}
export const DialogMessageContainer = (props: DialogMessageContainerType) => {
    const addMessage = () => props.dispatch(sendMessageDialogs())

    const onChangeTextarea = (text: string) => {
        if (text) {
            let action = updateMessageDialogs(text)
            props.dispatch(action)
        }
    }
    return (
        <DialogMessage
            posts={props.state}
            updateNewMessageText={onChangeTextarea}
            addMessageText={addMessage}
        />
    )
};

