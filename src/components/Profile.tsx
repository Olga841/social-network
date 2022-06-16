import React from "react";
import s from './componrnts_styles/main.module.css'
import {Post, PostPropsType} from "./Post";
import {ProfileInfo} from "./ProfileInfo";

export type MainTypeProps = {
    posts: Array<PostPropsType>
}

export function Profile(props: MainTypeProps) {

    return (
      <main className={s.content}>
          <ProfileInfo/>
          <div className='posts-list'>my posts
            <div className='new-post'>New post</div>
              {props.posts.map(p => {
                  <Post post={p.post} like={p.like}/>
              })}
          </div>
      </main>
    )
}