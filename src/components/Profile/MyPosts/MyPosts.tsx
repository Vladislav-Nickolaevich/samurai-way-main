import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Posts/Post";
import {ProfilePageType} from "../../../redux/store";


type MyPostsDispatchType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
    posts: ProfilePageType
}

const MyPosts = (props: MyPostsDispatchType) => {
    let newText = React.createRef<HTMLTextAreaElement>()
    const addPostHandler = () => {
        if (newText.current?.value?.trim() !== '') {
            props.addPost()
        }
    }

    const onChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = newText.current?.value
        if (text){
            props.updateNewPostText(text)
        }
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newText} value={props.posts.newPostText} onChange={onChangeTextarea}/>
                </div>
                <div>
                    <button onClick={addPostHandler}>Add posts</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post posts={props.posts.posts}/>
            </div>
        </div>
    );
};

export default MyPosts;