import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profilePage-reducer";
import MyPosts from "./MyPosts";
import StoreContext from '../../../StoreContext';


const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState()
                const addPostHandler = () => store.dispatch(addPostActionCreator())

                const onChangeTextarea = (text: string) => {
                    if (text) {
                        let action = updateNewPostTextActionCreator(text)
                        store.dispatch(action)
                    }
                }
                return <MyPosts
                    updateNewPostText={onChangeTextarea}
                    addPost={addPostHandler}
                    posts={state.profilePage}
                />
            }
            }
        </StoreContext.Consumer>

    );
};




export default MyPostsContainer;