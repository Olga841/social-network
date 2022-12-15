import React from "react";
import {Profile} from "./Profile";
import {changePostText, PostType, UserProfileInfoType} from "./redux/profile-reducer";
import axios from "axios";

import {Preloader} from "./Preloader";
import {Params} from "react-router-dom";
import {usersAPI} from "../api/api";


export type PostPropsType = {
    posts: Array<PostType>
    newPostText: string
    addPost: (newPostElement: string) => void
    changePostText: (newPostElement: string) => void
    setUserProfile: (info: UserProfileInfoType) => void
    info: UserProfileInfoType,
    isFetching: boolean,
    toggleIsFetching: (isToggle: boolean) => void
    params: Params
}

class ProfileAPIComponent extends React.Component<PostPropsType> {
    componentDidMount = () => {
        let userId = this.props.params.userId
        // if (!userId)
        //     userId = '1059'
        // }
        console.log(this.props.params)
        this.props.toggleIsFetching(true)
        console.log('didmount', this.props)
        usersAPI.getAllUsers(1, 2).then(response => {
            debugger
            this.props.toggleIsFetching(false)
            console.log(response.data)
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return <>
            {this.props.isFetching ?
                <Preloader/>
                : <Profile addPost={this.props.addPost} newPostText={this.props.newPostText}
                           updateNewPostText={this.props.changePostText} posts={this.props.posts}
                           info={this.props.info} setUserProfile={this.props.setUserProfile}
                           params={this.props.params}/>}


        </>
    }
}

export default ProfileAPIComponent