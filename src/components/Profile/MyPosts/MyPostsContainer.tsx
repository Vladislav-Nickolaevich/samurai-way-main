import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profilePage-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";
import {Action, Dispatch} from "redux";


const mapStateToProps = (state: AppRootStateType) => {
    return {
        posts:  state.profilePage
    }
}
const  dispatchStateToProps = (dispatch: Dispatch<Action>) => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}


export const MyPostsContainer = connect(mapStateToProps, dispatchStateToProps)(MyPosts)