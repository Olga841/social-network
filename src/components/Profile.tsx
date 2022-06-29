import React from "react";
import s from './componrnts_styles/main.module.css'
import {Post, PostPropsType} from "./Post";
import {ProfileInfo} from "./ProfileInfo";

export type ProfilePropsType = {
    posts: Array<PostPropsType>
    addPost: (newPost: string) => void
}

export function Profile(props: ProfilePropsType) {
    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
        }
    }
    return (
        <main className={s.content}>
            <ProfileInfo/>
            <div className='posts-list'>my posts
                <textarea ref={newPostElement}></textarea>
                <button className='new-post' onClick={addPost}>New post
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