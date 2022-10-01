import React from "react";
import axios from "axios";
import {Users} from "./UsersС";
import preloader from './../images/Heart-1s-200px.gif'
import {UserType} from "./redux/users-reducer";

type UsersPropsType = {
    users: Array<UserType>,
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>, totalCount: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    isFetching: boolean
    toggleIsFetching: (isFetching: boolean) => void
}


class UsersAPIComponent extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        console.log('didmount', this.props)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items, response.data.totalCount)
        })
    }

    getUsersFromPage = (page: number) => {
        console.log(this.props)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items, response.data.totalCount)
        })
        this.props.setCurrentPage(page)
    }

    render() {
        return <>
            {this.props.isFetching ? <img src={preloader}/> : <Users users={this.props.users}
                                                                     follow={this.props.follow}
                                                                     unfollow={this.props.unfollow}
                                                                     setUsers={this.props.setUsers}
                                                                     pageSize={this.props.pageSize}
                                                                     totalUsersCount={this.props.totalUsersCount}
                                                                     currentPage={this.props.currentPage}
                                                                     setCurrentPage={this.props.setCurrentPage}
                                                                     getUsersFromPage={this.getUsersFromPage}
            />}

        </>
    }

}

export default UsersAPIComponent