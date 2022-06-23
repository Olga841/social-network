import React from "react";
import s from './componrnts_styles/main.module.css'
import {Post, PostPropsType} from "./Post";
import {ProfileInfo} from "./ProfileInfo";

export type ProfilePropsType = {
    posts: Array<PostPropsType>
    addPost: (newPost: PostPropsType) => void
}

export function Profile(props: ProfilePropsType) {

    return (
        <main className={s.content}>
            <ProfileInfo/>
            <div className='posts-list'>my posts
                <textarea></textarea>
                <button className='new-post' onClick={() => {
                    props.addPost({post: 'kjhgfdcvb', like: '0'})
                }}>New post
                </button>
                {console.log('posts rendering...')}
                {props.posts.map(p => {
                    return <Post post={p.post} like={p.like}/>
                })}
                {console.log('posts rendered!')}
            </div>
        </main>
    )
}