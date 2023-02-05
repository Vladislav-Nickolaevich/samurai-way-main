
import {DialogType} from "../components/Dialogs/Dialogs";

export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
export const SEND_NEW_MESSAGE_TEXT = 'ADD-NEW-MESSAGE-TEXT'

const messagesPageReducer = (state: DialogType, action: any) => {
    switch (action.type){
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText
            return state
        case SEND_NEW_MESSAGE_TEXT:
            let newMessage = {id: 5, message: state.newMessageText}
            state.newMessageText = ''
            state.messages.push(newMessage)
            return state
        default:
            return state
    }
}

export default messagesPageReducer