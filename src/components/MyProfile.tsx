import React from "react";
import s from './components_styles/main.module.css'
import {Post, PostPropsType} from "./Post";
import {ProfileInfo} from "./ProfileInfo";
import {UserProfileInfoType} from "./redux/profile-reducer";

export type MyProfilePropsType = {
    posts: Array<PostPropsType>
    addPost: (newPost: string) => void
    newPostText: string
    updateNewPostText: (newPostText: string) => void
}

export function MyProfile(props: MyProfilePropsType) {
    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
        }
    }
    const onPostChange = () => {
        if (newPostElement.current) {
            props.updateNewPostText(newPostElement.current.value)
        }
    }
    return (
        <main className={s.content}>
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