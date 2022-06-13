import React from "react";
import './componrnts_styles/item.css';



export type PostPropsType = {
    post: string
    like: string
}

export function Post(props: PostPropsType) {
    return (
        <div className='post_item'>
            <img  src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.18169-9/23526_339558886310_1955560_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=9267fe&_nc_ohc=2hhoxzfy_TUAX8UDzmC&_nc_ht=scontent-waw1-1.xx&oh=00_AT-FwYJcZJBIdpcJ9-XrPXGZf3d91LJk0sDrKpXnRE9mLg&oe=62507450" alt="ava" />
            <span>{props.post}</span>
            <br/>
            <span>{props.like}</span>
        </div>
    )
}