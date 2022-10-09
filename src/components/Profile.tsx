import React from "react";
import s from './componrnts_styles/main.module.css'
import {PostPropsType} from "./Post";
import {ProfileInfo} from "./ProfileInfo";
import {MyProfile} from "./MyProfile";
import {UserProfile} from "./UserProfile";
import {UserProfileInfoType} from "./redux/profile-reducer";

export type ProfilePropsType = {
    posts: Array<PostPropsType>
    addPost: (newPost: string) => void
    newPostText: string
    updateNewPostText: (newPostText: string) => void
    setUserProfile: (info: UserProfileInfoType) => void
    info: UserProfileInfoType
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
            props.updateNewPostText(newPostElement.current.value)
        }
    }
    return (
        <main className={s.content}>
            <ProfileInfo/>
            {props.info ?
                <UserProfile info={props.info} setUserProfile={props.setUserProfile}/> :
                <MyProfile posts={props.posts} addPost={props.addPost} newPostText={props.newPostText}
                           updateNewPostText={props.updateNewPostText}/>}
        </main>
    )
}