import React from 'react';
import s from './MyPosts.module.css'
import {Post, PostsType} from "./Posts/Post";

type MyPostsType = {
    title: string
    buttonAdd: string
    posts: PostsType[]
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
                {props.posts.map(el => {
                    return (
                        <Post likeCounts={el.likeCounts} mes={el.mes}
                              photo={el.photo} errorMes={el.errorMes}/>
                    );
                })}
            </div>
        </div>
    );
};

export default MyPosts;