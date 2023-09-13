import React from 'react';
import s from './MyPosts.module.css'
import {Post, PostType} from "./Posts/Post";
import {ProfileUserType} from "../Profile";
import {Field, reduxForm} from "redux-form";

type MyPostsType = {
    addPost: (mes: string) => void
    posts: ProfilePageType
}
export type ProfilePageType = {
    posts: PostType[]
    profile: ProfileUserType
    status: string
}
type MyPostMessageType = {
    MyPostMessage: string
}

const MyPosts = (props: MyPostsType) => {
    const {
        // updateNewPostText,
        addPost, posts} = props
    // let newText = React.createRef<HTMLTextAreaElement>()

    const addPostHandler = (mes: MyPostMessageType) => {
        if (mes.MyPostMessage.trim() !== '') {
            addPost(mes.MyPostMessage)
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddMessageMyPostFormRedux onSubmit={addPostHandler}/>
            </div>
            <div className={s.posts}>
                <Post posts={posts.posts}/>
            </div>
        </div>
    );
};


const AddPostMessage = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                    <Field
                        name={'MyPostMessage'}
                        component={'textarea'}
                    />
            </div>
            <div>
                <button>Add posts</button>
            </div>
        </form>
    )
}

const AddMessageMyPostFormRedux =  reduxForm<MyPostMessageType>({form: 'AddMessageMyPostForm'})(AddPostMessage)

export default MyPosts;