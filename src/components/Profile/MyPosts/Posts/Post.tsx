import React from 'react';
import PostsClasses from './Post.module.css'


type PostsType = {
    mes: string
    photo: string
}
export const Post = (props:PostsType) => {
    return (
        <>
            <div className={PostsClasses.red}>
                <img src={props.photo} alt=""/>
                {props.mes}
                <div>
                    <span>Like</span>
                </div>
            </div>
        </>

    );
};

