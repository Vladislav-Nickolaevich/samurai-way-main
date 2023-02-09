import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profilePage-reducer";
import MyPosts from "./MyPosts";
import {ProfilePageType} from "../../../redux/store";
import {AppRootStateType} from "../../../redux/redux-store";


type MyPostsDispatchType = {
    dispatch: (action: any) => void
    posts: ProfilePageType
    // state: AppRootStateType
}

const MyPostsContainer = (props: MyPostsDispatchType) => {
    const addPostHandler = () => {
            props.dispatch(addPostActionCreator())
    }

    const onChangeTextarea = (text:string) => {
        if (text){
            let action = updateNewPostTextActionCreator(text)
            props.dispatch(action)
        }
    }

    return (
       <MyPosts
           updateNewPostText={onChangeTextarea}
           addPost={addPostHandler}
           posts={props.posts}
       />
    );
};

export default MyPostsContainer;