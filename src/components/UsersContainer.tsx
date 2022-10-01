import React from "react";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setUsersAC, toggleIsFetchingAC, unfollowAC, UserType} from "./redux/users-reducer";
import {AppStateType} from "./redux/redux-store";
import {Dispatch} from "redux";
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
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userID: number) => (dispatch(followAC(userID))),
        unfollow: (userID: number) => (dispatch(unfollowAC(userID))),
        setUsers: (users: Array<UserType>, totalCount: number) => (dispatch(setUsersAC(users, totalCount))),
        setCurrentPage: (currentPage: number) => (dispatch(setCurrentPageAC(currentPage))),
        toggleIsFetching: (isFetching: boolean) => (dispatch(toggleIsFetchingAC(isFetching)))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)