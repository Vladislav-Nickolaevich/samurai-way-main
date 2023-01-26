import React, {ChangeEvent, useState} from 'react';
import s from './MyPosts.module.css'
import {Post, PostType} from "./Posts/Post";

type MyPostsType = {
    title: string
    posts: PostType[]
    addPost: (newPost: string) => void
}
const MyPosts = (props:MyPostsType) => {

    const [value, setValue] = useState('')
    const addPostHandler = () => {
        if(value.trim() !== ''){
            props.addPost(value)
            setValue('')
        }
    }
    const onChangeTextarea = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
        <div className={s.postsBlock}>
            <h3>{props.title}</h3>
            <div>
                <div>
                    <textarea value={value} onChange={onChangeTextarea}></textarea>
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