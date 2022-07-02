import React from "react";
import s from './componrnts_styles/main.module.css'
import {Post, PostPropsType} from "./Post";
import {ProfileInfo} from "./ProfileInfo";

export type ProfilePropsType = {
    posts: Array<PostPropsType>
    addPost: (newPost: string) => void
    newPostText: string
    changePostText: (newPostText: string) => void
}

export function Profile(props: ProfilePropsType) {
    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
        }
    }
    const onPostChange = () => {
        if (newPostElement.current) {
            props.changePostText(newPostElement.current.value)
        }
    }
    return (
        <main className={s.content}>
            <ProfileInfo/>
            <div className='posts-list'>my posts
                <textarea ref={newPostElement}
                          onChange={onPostChange}
                          value={props.newPostText}/>
                <button className='new-post' onClick={addPost}>New post
                </button>
                {props.posts.map(p => {
                    return <Post post={p.post} like={p.like}/>
                })}
            </div>
        </main>
    )
}