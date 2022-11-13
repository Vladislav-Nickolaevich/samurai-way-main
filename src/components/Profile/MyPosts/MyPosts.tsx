import React from 'react';
import  './MyPosts.module.css'
import {Post} from "./Posts/Post";

const MyPosts = () => {
    return (
        <>
            <div>
                My posts
                <div>New post</div>
            </div>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Post mes={'poost 1'} photo={"https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg"}/>
            <Post mes={'poost 2'} photo={"https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg"}/>
        </>

    );
};

export default MyPosts;