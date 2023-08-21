import React from 'react';
import {sendMessageDialogs, updateMessageDialogs} from "../../redux/messagesPage-reducer";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {AppRootStateType} from "../../redux/redux-store";
import {Action, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

const mapStateToProps = (state: AppRootStateType) => {
    return {
        posts: state.messagesPage,
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

let AuthRedirectComponent = withAuthRedirect(Dialogs)


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)