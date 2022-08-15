import React from "react";
import s from './componrnts_styles/main.module.css'
import {Post, PostPropsType} from "./Post";
import {ProfileInfo} from "./ProfileInfo";
import {addPostAC, changePostTextAC} from "./redux/store";
import {Profile} from "./Profile";
import {StoreType} from "./redux/redux-store";

export type ProfilePropsType = {
    store: StoreType
    // posts: Array<PostPropsType>
    // dispatch: (action: any) => void
    //addPost: (newPost: string) => void
    // newPostText: string
    //changePostText: (newPostText: string) => void
}

export function ProfileContainer(props: ProfilePropsType) {
    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        if (newPostElement.current) {
            props.store.dispatch(addPostAC(newPostElement.current.value));
        }
    }
    const onPostChange = () => {
        if (newPostElement.current) {
            props.store.dispatch(changePostTextAC(newPostElement.current.value))

        }
    }
    return (
        <Profile posts={props.store.getState().profilePage.posts} updateNewPostText={onPostChange} addPost={addPost}
                 newPostText={props.store.getState().profilePage.newPostText}/>
    )
}