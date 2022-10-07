import React from "react";
import s from './componrnts_styles/main.module.css'
import {Post, PostPropsType} from "./Post";
import {ProfileInfo} from "./ProfileInfo";
import {UserProfileInfoType} from "./redux/profile-reducer";

export type UserProfilePropsType = {
    info: UserProfileInfoType
    setUserProfile: (info: UserProfileInfoType) => void
}

export function UserProfile(props: UserProfilePropsType) {

    return (
        <main className={s.content}>
            <div className='posts-list'>
                <div>aboutMe: {props.info.aboutMe}</div>
                <div>contacts:
                    <div>facebook {props.info.contacts.facebook}</div>
                    <div>website {props.info.contacts.website}</div>
                    <div>vk {props.info.contacts.vk}</div>
                    <div>twitter {props.info.contacts.twitter}</div>
                    <div>instagram {props.info.contacts.instagram}</div>
                    <div>youtube {props.info.contacts.youtube}</div>
                    <div>github {props.info.contacts.github}</div>
                    <div>mainLink {props.info.contacts.mainLink}</div>
                </div>
                <div>lookingForAJob: {props.info.lookingForAJob}</div>
                <div>{props.info.lookingForAJobDescription}</div>
                <div>
                    <img src={props.info.photos.large}/>
                </div>
            </div>
        </main>
    )
}