import React from 'react'
import s from './componrnts_styles/nav.module.css';

export function Sidebar() {
    return (
        <div>
            <div className={s.title}>Friends</div>
            <div className={s.wrapper}>
                <div>
                    <img src='https://klike.net/uploads/posts/2019-03/1551511801_1.jpg' className={s.friendAva}
                         alt='ava'/>
                    <div className={s.friendDesc}>Vova</div>
                </div>
                <div>
                    <img src='https://klike.net/uploads/posts/2019-03/1551511801_1.jpg' className={s.friendAva}
                         alt='ava'/>
                    <div className={s.friendDesc}>Vova</div>
                </div>
                <div>
                    <img src='https://klike.net/uploads/posts/2019-03/1551511801_1.jpg' className={s.friendAva}
                         alt='ava'/>
                    <div className={s.friendDesc}>Vova</div>
                </div>
            </div>
        </div>
    )
}
