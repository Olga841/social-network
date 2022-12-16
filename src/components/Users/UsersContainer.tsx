import React from "react";
import {connect} from "react-redux";
import {follow, setCurrentPage, setUsers, toggleIsFetching, unfollow, UserType} from "../redux/users-reducer";
import {AppStateType} from "../redux/redux-store";
import UsersAPIComponent from "./UsersAPIС";


export type  MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    toggleIsFetching
})(UsersAPIComponent)