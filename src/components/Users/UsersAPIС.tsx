import React from "react";
import {Users} from "./UsersС";
import {UserType} from "../redux/users-reducer";
import {Preloader} from "../CommonComponents/Preloader";
import {usersAPI} from "../../api/api";

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
    disabled: boolean
    toggleDisabled: (disabled: boolean) => void
    getAllUsersThunkCreator: (currentPage: number, pageSize: number) => void
}


class UsersAPIComponent extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getAllUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    getUsersFromPage = (page: number) => {
        this.props.toggleIsFetching(true)
        usersAPI.getUsersForPage(page, this.props.pageSize).then(response => {
            this.props.setUsers(response.data.items, response.data.totalCount)
        })
        this.props.toggleIsFetching(false)
        this.props.setCurrentPage(page)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : <Users users={this.props.users}
                                                           follow={this.props.follow}
                                                           unfollow={this.props.unfollow}
                                                           setUsers={this.props.setUsers}
                                                           pageSize={this.props.pageSize}
                                                           totalUsersCount={this.props.totalUsersCount}
                                                           currentPage={this.props.currentPage}
                                                           setCurrentPage={this.props.setCurrentPage}
                                                           getUsersFromPage={this.getUsersFromPage}
                                                           disabled={this.props.disabled}
                                                           toggleDisabled={this.props.toggleDisabled}
            />}

        </>
    }

}

export default UsersAPIComponent