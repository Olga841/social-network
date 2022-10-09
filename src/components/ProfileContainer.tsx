import React, {ComponentType} from "react";
import {connect, MapDispatchToProps} from "react-redux";
import {AppStateType} from "./redux/redux-store";
import {addPost, changePostText, setUserProfile, toggleIsFetching, UserProfileInfoType} from "./redux/profile-reducer";
import ProfileAPIComponent, {PostPropsType} from "./ProfileAPIContainer";
import {Params, useParams} from "react-router-dom";
import {ProfilePropsType} from "./Profile";
import {MapStatePropsType} from "./UsersContainer";


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
// export const params = useParams()
const WithUrlDataContainerComponent = (props: Omit<PostPropsType, 'params'>) => {
    return <ProfileAPIComponent {...props} params={useParams()}/>

}


export const ProfileContainer = connect(mapStateToProps, {
    addPost,
    changePostText,
    setUserProfile,
    toggleIsFetching
})(WithUrlDataContainerComponent)