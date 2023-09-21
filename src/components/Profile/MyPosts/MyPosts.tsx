import React from 'react';
import s from './MyPosts.module.css'
import {Post, PostType} from "./Posts/Post";
import {ProfileUserType} from "../Profile";
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";

const maxLength15 = maxLength(15)

const MyPosts = (props: MyPostsType) => {
    const {addPost, posts} = props

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
                        component={Textarea}
                        validate={[required, maxLength15]}
                        type={'Post message'}
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