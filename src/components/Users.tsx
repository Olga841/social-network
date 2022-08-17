import React from "react";


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
        {props.users.map(u => <div key={u.id}>
        <span>
            <div><img src={u.photoURL} alt={u.name}/></div>
            <div>  {u.followed
                ? <button onClick={() => {
                    props.follow(u.id)
                }}>unfollow</button>
                : <button onClick={() => {
                    props.unfollow(u.id)
                }}>follow</button>}
            </div>
        </span>
            <span>
            <div>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </div>
            <div>
                <span>{u.location.city}, </span>
                <span>{u.location.country}</span>
            </div>
        </span>
        </div>)}
    </div>)
}