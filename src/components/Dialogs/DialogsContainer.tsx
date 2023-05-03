import React from 'react';
import {sendMessageDialogs, updateMessageDialogs} from "../../redux/messagesPage-reducer";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {AppRootStateType} from "../../redux/redux-store";
import {Action, Dispatch} from "redux";


const mapStateToProps = (state: AppRootStateType) => {
    return {
        posts: state.messagesPage,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch:  Dispatch<Action>) => {
    return {
        addMessageText: () => {
            dispatch(sendMessageDialogs())
        },
        updateNewMessageText: (text: string) => {
            dispatch(updateMessageDialogs(text))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)