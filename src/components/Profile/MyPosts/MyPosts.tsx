import React from 'react';
import s from './MyPosts.module.css'
import {Post, PostType} from "./Posts/Post";

type MyPostsType = {
    title: string
    buttonAdd: string
    posts: PostType[]
}
const MyPosts = (props:MyPostsType) => {
    return (
        <div className={s.postsBlock}>
            <h3>{props.title}</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>{props.buttonAdd}</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post posts={props.posts}/>
            </div>
        </div>
    );
};

export default MyPosts;