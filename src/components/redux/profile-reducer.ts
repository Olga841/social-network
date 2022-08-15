import {ActionsTypes, PostType, ProfilePageType} from './store'

const ADD_POST = 'ADD-POST'
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT'

export function profileReducer(state: ProfilePageType, action: ActionsTypes) {
    if (action.type === ADD_POST) {
        let message: PostType = {
            post: action.newPost,
            like: '0 likes'
        }
        state.posts.push(message)
        state.newPostText = ''
    } else if (action.type === CHANGE_POST_TEXT) {
        state.newPostText = action.text
        console.log(action.text)
    }
    return state
}