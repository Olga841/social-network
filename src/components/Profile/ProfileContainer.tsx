import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {
    addPost,
    changePostText,
    getUsersProfileThunkCreator,
    setUserProfile,
    toggleIsFetching,
    UserProfileInfoType
} from "../redux/profile-reducer";
import ProfileAPIComponent, {PostPropsType} from "./ProfileAPIContainer";
import {useParams} from "react-router-dom";


type PostType = {
    post: string
    like: string
}
type mapStateToPropsType = {
    posts: Array<PostType>
    newPostText: string
    info: UserProfileInfoType
    isFetching: boolean
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        info: state.profilePage.info,
        isFetching: state.profilePage.isFetching
    }
}

const WithUrlDataContainerComponent = (props: Omit<PostPropsType, 'params'>) => {
    return <ProfileAPIComponent {...props} params={useParams()}/>

}

export const ProfileContainer = connect(mapStateToProps, {
    addPost,
    changePostText,
    setUserProfile,
    toggleIsFetching,
    getUsersProfileThunkCreator
})(WithUrlDataContainerComponent)