import React from "react";
import s from './componrnts_styles/Users.module.css'
import axios from "axios";
import userAvatar from './../images/493fa0f13970ab3ef29375669f670451.jpg'

type UserType = {
    id: number,
    name: string,
    photoURL: string,
    followed: boolean,
    status: string,
    photos: { small: string, large: string }
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
    setUsers: (users: Array<UserType>, totalCount: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    getUsersFromPage: (page: number) => void

}


export const Users = (props: UsersPropsType) => {
    console.log(props)
    let pagesCount = Math.ceil((props.totalUsersCount / props.pageSize))
    let pages = []
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }
    return (<div>
        <div>
            {pages.map(p => {

                return <span className={props.currentPage === p ? s.selectedPage : ''}
                             onClick={() => props.getUsersFromPage(p)}>{p + ' '}</span>
            })}

        </div>
        {props.users.map(u => <div key={u.id} className={s.userContainer}>
            <div className={s.avaBlock}>
                <div><img src={u.photos.small !== null ? u.photos.small : userAvatar} alt={u.name} className={s.photo}/>
                </div>
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
                    <span>u.location.city </span>
                    <span>u.location.country</span>
                </div>
            </div>
        </div>)}
    </div>)
}