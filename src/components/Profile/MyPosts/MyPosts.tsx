import React, {ChangeEvent, useState} from 'react';
import s from './MyPosts.module.css'
import {Post, PostType} from "./Posts/Post";


type MyPostsType = {
    title: string
    posts: PostType[]
    addPost: () => void
    updateNewPostText: (newText: string) => void
}
const MyPosts = (props:MyPostsType) => {

    const [value, setValue] = useState('')
    const addPostHandler = () => {
        if(value.trim() !== ''){
            props.addPost()
            setValue('')

        }
    }

    const onChangeTextarea = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)
        setValue(text)
    }
    return (
        <div className={s.postsBlock}>
            <h3>{props.title}</h3>
            <div>
                <div>
                   {<textarea value={value}  onChange={onChangeTextarea}/>}
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