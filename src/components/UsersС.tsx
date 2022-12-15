import React from "react";
import s from './components_styles/Users.module.css'
import userAvatar from './../images/493fa0f13970ab3ef29375669f670451.jpg'
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../api/api";

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
                <NavLink to={`/profile/${u.id}`}>
                    <div><img src={u.photos.small !== null ? u.photos.small : userAvatar} alt={u.name}
                              className={s.photo}/>
                    </div>
                </NavLink>
                <div>  {!u.followed
                    ? <button
                        onClick={() => {
                            usersAPI.followUser(u.id).then(response => {
                                if (response.data.resultCode === 0) {
                                    props.follow(u.id)
                                    console.log(u.followed)
                                }
                            })
                        }}
                    >follow</button>
                    : <button
                        onClick={() => {
                            usersAPI.unfollowUser(u.id).then(response => {
                                if (response.data.resultCode === 0) {
                                    props.unfollow(u.id)
                                    console.log(u.followed)
                                }
                            })
                        }}
                    >unfollow</button>}
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