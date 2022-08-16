const ADD_POST = 'ADD-POST'
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT'
type PostType = {
    post: string
    like: string
}
type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
type AddPostType = {
    type: 'ADD-POST'
    newPost: string
}
type ChangePostText = {
    type: 'CHANGE-POST-TEXT'
    text: string
}
type ActionsTypes = AddPostType | ChangePostText

const initialState: ProfilePageType = {
    posts: [
        {post: "This is my first post! Let's fly!", like: '2 likes'},
        {post: "Oh! This social network is awesome!", like: '2 likes'}
    ],
    newPostText: 'it-kamasutra'
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
    }
    return {...state}
}

export const addPostAC = (newPost: string) => ({type: ADD_POST, newPost} as const)
export const changePostTextAC = (text: string) => ({type: CHANGE_POST_TEXT, text} as const)