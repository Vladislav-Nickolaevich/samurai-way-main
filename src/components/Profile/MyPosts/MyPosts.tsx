import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Posts/Post";

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post likeCounts={10} mes={'Hi'}
                      photo={"https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg"}/>
                <Post likeCounts={15} mes={"It's my first post"}
                      photo={"https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg"}/>
            </div>
        </div>
    );
};

export default MyPosts;