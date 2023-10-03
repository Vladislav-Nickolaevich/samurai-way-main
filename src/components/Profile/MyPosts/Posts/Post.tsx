import React from 'react';
import PostsClasses from './Post.module.css'

export type PostType = {
    id: string
    mes: string
    photo: string
    likeCounts: number
    errorMes: string
}

export const Post = (props: PostType) => {
    return (
        <div className={PostsClasses.red}>
                    <div>
                        <img src={props.photo} alt={props.errorMes}/>
                        {props.mes}
                        <div>
                            <span>Like {props.likeCounts}</span>
                        </div>
                    </div>
        </div>
    );
};
