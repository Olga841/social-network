import React from "react";
import s from './componrnts_styles/Users.module.css'

type UserType = {
    id: number,
    name: string,
    photoURL: string,
    followed: boolean,
    status: string,
    location: LocationType
}
type LocationType = {
    city: string
    country: string
}
type UsersPropsType = {
    users: Array<UserType>,
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
}


export const Users = (props: UsersPropsType) => {
    props.setUsers([])
    return (<div>
        {props.users.map(u => <div key={u.id} className={s.userContainer}>
            <div className={s.avaBlock}>
                <div><img src={u.photoURL} alt={u.name} className={s.photo}/></div>
                <div>  {u.followed
                    ? <button onClick={() => {
                        props.follow(u.id)
                    }}>unfollow</button>
                    : <button onClick={() => {
                        props.unfollow(u.id)
                    }}>follow</button>}
                </div>
            </div>
            <div className={s.descriptionBlock}>
                <div className={s.userNameStatus}>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </div>
                <div>
                    <span>{u.location.city}, </span>
                    <span>{u.location.country}</span>
                </div>
            </div>
        </div>)}
    </div>)
}