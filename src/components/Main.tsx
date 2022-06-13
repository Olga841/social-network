import React from "react";
import s from './componrnts_styles/main.module.css'
import {Post, PostPropsType} from "./Post";

export type MainTypeProps = {
    posts: Array<PostPropsType>
}

export function Main(props: MainTypeProps) {

    return (
      <main className={s.content}>
        <img src="https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8bmF0dXJhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        <div>
          <div className='avatar'>my avatar  + logo</div>
          <div className='posts-list'>my posts
            <div className='new-post'>New post</div>
              {props.posts.map(p => {
                  <Post post={p.post} like={p.like}/>
              })}
          </div>
        </div>
      </main>
    )
}