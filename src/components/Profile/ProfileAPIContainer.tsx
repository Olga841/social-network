import React from "react";
import {Profile} from "./Profile";
import {PostType, UserProfileInfoType} from "../redux/profile-reducer";

import {Preloader} from "../CommonComponents/Preloader";
import {Params} from "react-router-dom";


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
    getUsersProfileThunkCreator: (userId: string | undefined) => void
}

class ProfileAPIComponent extends React.Component<PostPropsType> {
    componentDidMount = () => {
        let userId = this.props.params.userId
        this.props.getUsersProfileThunkCreator(userId)
        // this.props.toggleIsFetching(true)
        // profileAPI.getUserProfile(userId).then(response => {
        //     this.props.toggleIsFetching(false)
        //     this.props.setUserProfile(response.data)
        // })
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