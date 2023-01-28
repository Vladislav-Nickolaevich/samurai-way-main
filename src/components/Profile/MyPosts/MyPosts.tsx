import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post, PostType} from "./Posts/Post";


type MyPostsType = {
    title: string
    posts: PostType[]
    addPost: () => void
    updateNewPostText: (newText: string) => void
    newPostText: string
}
const MyPosts = (props:MyPostsType) => {
    let newText = React.createRef<HTMLTextAreaElement>()
    const addPostHandler = () => {
        if(newText.current?.value?.trim() !== ''){
            props.addPost()
        }
    }


    const onChangeTextarea = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let text = newText.current?.value
        if(text)
        props.updateNewPostText(text)
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