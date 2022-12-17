import React from "react";
import {connect} from "react-redux";
import {
    followThunkCreator,
    getAllUsersThunkCreator,
    getUsersFromPageThunkCreator,
    toggleDisabled,
    toggleIsFetching,
    unfollowThunkCreator,
    UserType
} from "../redux/users-reducer";
import {AppStateType} from "../redux/redux-store";
import UsersAPIComponent from "./UsersAPIС";


export type  MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    disabled: boolean
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        disabled: state.usersPage.disabled
    }
}

export const UsersContainer = connect(mapStateToProps, {
    toggleIsFetching,
    toggleDisabled, getAllUsersThunkCreator,
    getUsersFromPageThunkCreator,
    followThunkCreator, unfollowThunkCreator
})(UsersAPIComponent)