import React from "react";
import {connect} from "react-redux";
import {followAC, UsersPageType, setUsersAC, unfollowAC, UserType, setCurrentPageAC} from "./redux/users-reducer";
import {AppStateType} from "./redux/redux-store";
import {Dispatch} from "redux";
import UsersC from "./UsersС";
import {Users} from "./Users";


export type  MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userID: number) => (dispatch(followAC(userID))),
        unfollow: (userID: number) => (dispatch(unfollowAC(userID))),
        setUsers: (users: Array<UserType>, totalCount: number) => (dispatch(setUsersAC(users, totalCount))),
        setCurrentPage: (currentPage: number) => (dispatch(setCurrentPageAC(currentPage)))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)