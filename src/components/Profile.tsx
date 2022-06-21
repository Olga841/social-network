import React from "react";
import s from './componrnts_styles/main.module.css'
import {Post, PostPropsType} from "./Post";
import {ProfileInfo} from "./ProfileInfo";

export type ProfilePropsType = {
    posts: Array<PostPropsType>
}

export function Profile(props: ProfilePropsType) {

    return (
        <main className={s.content}>
            <ProfileInfo/>
            <div className='posts-list'>my posts
                <div className='new-post'>New post</div>
                {console.log('posts rendering...')}
                {props.posts.map(p => {
                    return <Post post={p.post} like={p.like}/>
                })}
                {console.log('posts rendered!')}
            </div>
        </main>
    )
}