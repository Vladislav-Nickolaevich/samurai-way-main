import React from 'react';
import PostsClasses from './Post.module.css'


type PostsType = {
    mes: string
    photo: string
    likeCounts: number
}
export const Post = (props: PostsType) => {
    return (
        <>
            <div className={PostsClasses.red}>
                <img src={props.photo} alt=""/>
                {props.mes}
                <div>
                    <span>Like {props.likeCounts}</span>
                </div>
            </div>
        </>

    );
};

