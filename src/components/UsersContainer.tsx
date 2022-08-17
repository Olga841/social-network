import React from "react";
import {connect} from "react-redux";
import {followAC, InitialStateType, setUsersAC, unfollowAC} from "./redux/users-reducer";
import {AppStateType} from "./redux/redux-store";
import {Dispatch} from "redux";
import {Users} from "./Users";

const mapStateToProps = (state: AppStateType): InitialStateType => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userID: number) => (dispatch(followAC(userID))),
        unfollow: (userID: number) => (dispatch(unfollowAC(userID))),
        setUsers: (users: InitialStateType) => (dispatch(setUsersAC(users)))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)