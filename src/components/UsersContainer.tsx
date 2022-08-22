import React from "react";
import {connect} from "react-redux";
import {followAC, UsersPageType, setUsersAC, unfollowAC, UserType} from "./redux/users-reducer";
import {AppStateType} from "./redux/redux-store";
import {Dispatch} from "redux";
import {Users} from "./Users";

export type  MapStatePropsType = {
    users: Array<UserType>
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userID: number) => (dispatch(followAC(userID))),
        unfollow: (userID: number) => (dispatch(unfollowAC(userID))),
        setUsers: (users: Array<UserType>) => (dispatch(setUsersAC(users)))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)