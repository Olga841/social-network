import React from "react";
import './componrnts_styles/item.css';


export type PostPropsType = {
    post: string
    like: string
}

export function Post(props: PostPropsType) {
    return (
        <div className='post_item'>
            <img src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg" alt="ava"/>
            <span>{props.post}</span>
            <br/>
            <span>{props.like}</span>
        </div>
    )
}