import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {PostType} from "./MyPosts/Posts/Post";
import {v1} from "uuid";


export const Profile = () => {
    const posts: PostType[] = [
        {
            id:v1(),
            likeCounts: 10,
            mes: 'Hi',
            photo: "https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg",
            errorMes: 'Image not found'
        },
        {
            id:v1(),
            likeCounts: 15,
            mes: "It's my first post",
            photo: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg",
            errorMes: 'Image not found'
        },
    ]
    return (
        <div>
            <ProfileInfo
                img={"https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"}
                titleError={'Image is not found'}
            />
            <MyPosts
                title={'My posts'}
                buttonAdd={'Add post'}
                posts={posts}
            />
        </div>

    );
};

