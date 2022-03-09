import React from "react";

export function Main() {
    return (
        <main className='content'>
        <img src="https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8bmF0dXJhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        <div>
          <div className='avatar'>my avatar  + logo</div>
          <div className='posts-list'>my posts
            <div className='new-post'>New post</div>
            <div className='post-item'>post 1</div>
            <div className='post-item'>post 2</div>
          </div>
        </div>
      </main>
    )
}