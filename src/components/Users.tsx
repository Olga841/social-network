import React, {useEffect} from "react";
import s from './componrnts_styles/Users.module.css'
import axios from "axios";
// import users from "./UsersС";

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
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
}


export const Users = (props: UsersPropsType) => {
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`).then(response => {
            props.setUsers(response.data.items)
        })
    }, [props.users.length, props.currentPage, props.pageSize])

    let pagesCount = Math.ceil((props.totalUsersCount / props.pageSize))
    let pages = []
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }

    return (<div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? s.selectedPage : ''}
                             onClick={() => props.setCurrentPage(p)}>{p}</span>
            })}

        </div>
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
                    <span>u.location.city </span>
                    <span>u.location.country</span>
                </div>
            </div>
        </div>)}
    </div>)
}