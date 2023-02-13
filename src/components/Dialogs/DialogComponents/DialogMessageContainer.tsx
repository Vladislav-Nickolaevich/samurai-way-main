import React, {ChangeEvent} from 'react';
import {sendMessageDialogs, updateMessageDialogs} from "../../../redux/messagesPage-reducer";
import {DialogType} from "../Dialogs";
import {DialogMessage} from "./DialogMessage";
import StoreContext from '../../../StoreContext';
import {DialogUsers} from "./DialogUsers";

// type DialogMessageContainerType = {
//     state: DialogType
//     dispatch: (action: any) => void
// }

export const DialogMessageContainer = () => {
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


// type DialogMessageContainerType = {
//     state: DialogType
//     dispatch: (action: any) => void
// }
// export const DialogMessageContainer = (props: DialogMessageContainerType) => {
//     const addMessage = () => props.dispatch(sendMessageDialogs())
//
//     const onChangeTextarea = (text: string) => {
//         if (text) {
//             let action = updateMessageDialogs(text)
//             props.dispatch(action)
//         }
//     }
//     return (
//         <DialogMessage
//             posts={props.state}
//             updateNewMessageText={onChangeTextarea}
//             addMessageText={addMessage}
//         />
//     )
// };

