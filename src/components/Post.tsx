import React from "react";
import './components_styles/item.css';


export type PostPropsType = {
    post: string
    like: string
}

export function Post(props: PostPropsType) {
    return (
        <div className='post_item'>
            <img src="https://klike.net/uploads/posts/2019-03/1551511808_5.jpg" alt="ava"/>
            <span>{props.post}</span>
            <br/>
            <span>{props.like}</span>
        </div>
    )
}