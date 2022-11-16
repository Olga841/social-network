const ADD_POST = 'ADD-POST'
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const IS_FETCHING = 'IS_FETCHING'
export type PostType = {
    post: string
    like: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string,
    info: UserProfileInfoType
    isFetching: boolean

}
type AddPostType = {
    type: 'ADD-POST'
    newPost: string
}
type ChangePostText = {
    type: 'CHANGE-POST-TEXT'
    text: string
}
export type UserProfileInfoType = {
    aboutMe: string | null,
    contacts: {
        facebook: string | null,
        website: string | null,
        vk: string | null,
        twitter: string | null,
        instagram: string | null,
        youtube: string | null,
        github: string | null,
        mainLink: string | null
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string | null,
    userId: number,
    photos: {
        small: string | undefined,
        large: string | undefined
    },

}
type setUserProfile = {
    type: 'SET_USER_PROFILE',
    info: UserProfileInfoType
}
type ToggleIsFetching = {
    type: 'IS_FETCHING'
    isFetching: boolean
}
type ActionsTypes = AddPostType | ChangePostText | setUserProfile | ToggleIsFetching

const initialState: ProfilePageType = {
    posts: [
        {post: "This is my first post! Let's fly!", like: '2 likes'},
        {post: "Oh! This social network is awesome!", like: '2 likes'}
    ],
    newPostText: 'it-kamasutra',
    info: {
        aboutMe: "я круто чувак 1001%",
        contacts: {
            facebook: "facebook.com",
            website: null,
            vk: "vk.com/dimych",
            twitter: "https://twitter.com/@sdf",
            instagram: "instagram.com/sds",
            youtube: null,
            github: "github.com",
            mainLink: null
        },
        lookingForAJob: true,
        lookingForAJobDescription: "не ищу, а дурачусь",
        fullName: "samurai dimych",
        userId: 2,
        photos: {
            small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
            large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
        }
    },
    isFetching: false
}

export function profileReducer(state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType {
    if (action.type === ADD_POST) {
        return {
            ...state,
            posts: [...state.posts, {
                post: action.newPost,
                like: '0 likes'
            }],
            newPostText: ''
        }
    } else if (action.type === CHANGE_POST_TEXT) {
        return {...state, newPostText: action.text}
    } else if (action.type === SET_USER_PROFILE) {
        return {...state, info: action.info}
    } else if (action.type === IS_FETCHING) {
        return {...state, isFetching: action.isFetching}
    }
    return {...state}
}

export const addPost = (newPost: string) => ({type: ADD_POST, newPost} as const)
export const changePostText = (text: string) => ({type: CHANGE_POST_TEXT, text} as const)
export const setUserProfile = (info: UserProfileInfoType) => ({type: SET_USER_PROFILE, info} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: IS_FETCHING, isFetching} as const)