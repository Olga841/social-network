import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "./redux/redux-store";
import {Dispatch} from "redux";
import {addPostAC, changePostTextAC} from "./redux/profile-reducer";

type PostType = {
    post: string
    like: string
}
type mapStateToPropsType = {
    posts: Array<PostType>
    newPostText: string
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: (newPostElement: string) => (dispatch(addPostAC(newPostElement))),
        onPostChange: (newPostElement: string) => (dispatch(changePostTextAC(newPostElement)))
    }
}
export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)