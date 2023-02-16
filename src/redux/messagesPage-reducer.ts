import {messageType, userNameType} from "../components/Dialogs/Dialogs";
import {v1} from "uuid";

export type DialogType = {
    messages: messageType[]
    userName: userNameType[]
    newMessageText: string
}
export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
export const SEND_NEW_MESSAGE_TEXT = 'ADD-NEW-MESSAGE-TEXT'

let initialState = {
        messages: [
            {id: '1', message: 'Hi'},
            {id: '2', message: 'What is the best country for travelling?'},
            {id: '3', message: 'I like country with sea'},
            {id: '4', message: 'I want to see interesting places'},
        ],
        userName: [
            {
                id: 1,
                userName: 'Vlad',
                img: "https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg"
            },
            {
                id: 2,
                userName: 'Alex',
                img: "https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg"
            },
            {
                id: 3,
                userName: 'Katya',
                img: "https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg"
            },
            {
                id: 4,
                userName: 'John',
                img: "https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg"
            },
        ],
        newMessageText: ''

    }

const messagesPageReducer = (state: DialogType = initialState, action: any): DialogType => {
    switch (action.type){
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state, newMessageText: action.newMessageText
            }
        case SEND_NEW_MESSAGE_TEXT:
            let newMessage = {id: v1(), message: state.newMessageText}
            return {
                ...state, messages: [...state.messages, newMessage], newMessageText: ''
            }
        default:
            return state
    }
}


export const updateMessageDialogs = (mes: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: mes})
export const sendMessageDialogs = () => ({type: SEND_NEW_MESSAGE_TEXT})

export default messagesPageReducer