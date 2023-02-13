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


// type MyPostsDispatchType = {
//     state: AppRootStateType
//     dispatch: (action: any) => void
// }
// const MyPostsContainer = (props: MyPostsDispatchType) => {
//     const addPostHandler = () => props.dispatch(addPostActionCreator())
//
//     const onChangeTextarea = (text: string) => {
//         if (text) {
//             let action = updateNewPostTextActionCreator(text)
//             props.dispatch(action)
//         }
//     }
//
//     return (
//         <MyPosts
//             updateNewPostText={onChangeTextarea}
//             addPost={addPostHandler}
//             posts={props.state.profilePage}
//         />
//     );
// };


export default MyPostsContainer;