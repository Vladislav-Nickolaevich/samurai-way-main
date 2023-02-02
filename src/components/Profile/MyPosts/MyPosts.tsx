import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post, PostType} from "./Posts/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/State";


type MyPostsType = {
    title: string
    posts: PostType[]
    dispatch: (action: any) => void
    newPostText: string
}



const MyPosts = (props: MyPostsType) => {
    let newText = React.createRef<HTMLTextAreaElement>()
    const addPostHandler = () => {
        if (newText.current?.value?.trim() !== '') {
            props.dispatch(addPostActionCreator())
        }
    }

    const onChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = newText.current?.value
        if (text){
            let action = updateNewPostTextActionCreator(text)
            props.dispatch(action)
        }

    }
    return (
        <div className={s.postsBlock}>
            <h3>{props.title}</h3>
            <div>
                <div>
                    <textarea ref={newText} value={props.newPostText} onChange={onChangeTextarea}/>
                </div>
                <div>
                    <button onClick={addPostHandler}>Add posts</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post posts={props.posts}/>
            </div>
        </div>
    );
};

export default MyPosts;