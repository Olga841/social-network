import React from "react";
import {Users} from "./UsersС";
import {UserType} from "../redux/users-reducer";
import {Preloader} from "../CommonComponents/Preloader";

type UsersPropsType = {
    users: Array<UserType>,
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    disabled: boolean
    toggleDisabled: (disabled: boolean) => void
    getAllUsersThunkCreator: (currentPage: number, pageSize: number) => void
    getUsersFromPageThunkCreator: (page: number, pageSize: number) => void
    followThunkCreator: (userId: number) => void
    unfollowThunkCreator: (userId: number) => void
}


class UsersAPIComponent extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getAllUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }


    getUsersFromPage = (page: number) => {
        this.props.getUsersFromPageThunkCreator(page, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : <Users users={this.props.users}
                                                           follow={this.props.followThunkCreator}
                                                           unfollow={this.props.unfollowThunkCreator}
                                                           pageSize={this.props.pageSize}
                                                           totalUsersCount={this.props.totalUsersCount}
                                                           currentPage={this.props.currentPage}
                                                           getUsersFromPage={this.getUsersFromPage}
                                                           disabled={this.props.disabled}
                                                           toggleDisabled={this.props.toggleDisabled}
            />}

        </>
    }

}

export default UsersAPIComponent