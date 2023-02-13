import React from 'react';
import {sendMessageDialogs, updateMessageDialogs} from "../../redux/messagesPage-reducer";
import {DialogMessage} from "./DialogComponents/DialogMessage/DialogMessage";
import StoreContext from '../../StoreContext';
import {DialogUsers} from "./DialogComponents/DialogUsers/DialogUsers";



export const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
            const addMessage = () => store.dispatch(sendMessageDialogs())

            const onChangeTextarea = (text: string) => {
                if (text) {
                    let action = updateMessageDialogs(text)
                    store.dispatch(action)
                }
            }
            return (<>
                    <DialogMessage
                        posts={store.getState().messagesPage}
                        updateNewMessageText={onChangeTextarea}
                        addMessageText={addMessage}
                    />
                    <DialogUsers state={store.getState().messagesPage}/>
                </>
            )
        }
        }
        </StoreContext.Consumer>


    );
}


