import React from "react";
import s from './componrnts_styles/Users.module.css'
import axios from "axios";

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
    setUsers: (users: Array<UserType>, totalCount: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
}


class UsersC extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items, response.data.totalCount)
        })
    }

    // componentDidUpdate() {
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
    //         this.props.setUsers(response.data.items, response.data.totalCount)
    //     })
    // }

    getUsersFromPage(page: number) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items, response.data.totalCount)
        })
        this.props.setCurrentPage(page)
    }

    render() {
        console.log(this.props.currentPage)
        let pagesCount = Math.ceil((this.props.totalUsersCount / this.props.pageSize))
        let pages = []
        for (let i = 1; i < pagesCount; i++) {
            pages.push(i)
        }
        return (<div>
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p ? s.selectedPage : ''}
                                 onClick={() => this.getUsersFromPage(p)}>{p}</span>
                })}

            </div>
            {this.props.users.map(u => <div key={u.id} className={s.userContainer}>
                <div className={s.avaBlock}>
                    <div><img src={u.photoURL} alt={u.name} className={s.photo}/></div>
                    <div>  {u.followed
                        ? <button onClick={() => {
                            this.props.follow(u.id)
                        }}>unfollow</button>
                        : <button onClick={() => {
                            this.props.unfollow(u.id)
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

}

export default UsersC