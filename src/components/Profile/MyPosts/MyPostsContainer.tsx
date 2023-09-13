import React from 'react';
import {addPostAC,} from "../../../redux/profilePage-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";
import {Action, Dispatch} from "redux";


const mapStateToProps = (state: AppRootStateType) => {
    return {
        posts: state.profilePage
    }
}
const  dispatchStateToProps = (dispatch: Dispatch<Action>) => {
    return {
        addPost: (mes: string) => {
            dispatch(addPostAC(mes))
        }
    }
}


export const MyPostsContainer = connect(mapStateToProps, dispatchStateToProps)(MyPosts)