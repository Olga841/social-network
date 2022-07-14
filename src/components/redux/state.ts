type PostType = {
    post: string
    like: string
}
type DialogType = {
    id: number
    name: string
}
type MessageType = {
    message: string
}
type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
type dialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessage: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: dialogsPageType
}
export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _rerenderEntireTree: () => void
    /* addPost: (newPost: string) => void*/
    /*changePostText: (text: string) => void
    addMessage: (newMessage: string) => void
    changeMessageText: (text: string) => void*/
    subscriber: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes = AddPostType | ChangePostText | AddMessage | ChangeMessageText

export const addPostAC = (newPost: string) => ({type: 'ADD-POST', newPost} as const)
export const changePostTextAC = (text: string) => ({type: 'CHANGE-POST-TEXT', text} as const)
export const addMessageAC = (newMessage: string) => ({type: 'ADD-MESSAGE', newMessage} as const)
export const changeMessageTextAC = (text: string) => ({type: 'CHANGE-MESSAGE-TEXT', text} as const)

type AddPostType = {
    type: 'ADD-POST'
    newPost: string
}
type ChangePostText = {
    type: 'CHANGE-POST-TEXT'
    text: string
}
type AddMessage = {
    type: 'ADD-MESSAGE'
    newMessage: string
}
type ChangeMessageText = {
    type: 'CHANGE-MESSAGE-TEXT'
    text: string
}
export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {post: "This is my first post! Let's fly!", like: '2 likes'},
                {post: "Oh! This social network is awesome!", like: '2 likes'}
            ],
            newPostText: 'it-kamasutra'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Vasya'},
                {id: 2, name: 'Valera'},
                {id: 3, name: 'Vera'},
                {id: 4, name: 'Vyacheslav'},
                {id: 5, name: 'Vova'},
                {id: 6, name: 'Vitya'}
            ],
            messages: [
                {message: 'Hello!'},
                {message: 'Hello!'},
                {message: 'Hello!'},
                {message: 'Hello!'},
                {message: 'Hello!'},
                {message: 'Hello!'},
                {message: 'Hello!'},
                {message: 'Hello!'},
                {message: 'Hello!'}
            ],
            newMessage: 'Hello, my Dear friend!'
        }
    },
    getState() {
        return this._state
    },
    _rerenderEntireTree() {

    },
    /* addPost(newPost: string) {
         let message: PostType = {
             post: newPost,
             like: '0 likes'
         }
         this._state.profilePage.posts.push(message)
         this._rerenderEntireTree(this._state)
     },*/
    /* changePostText(text: string) {
         this._state.profilePage.newPostText = text
         console.log(text)
         this._rerenderEntireTree(this._state)
         this._state.profilePage.newPostText = ''
     },
     addMessage(newMessage: string) {
         let message: MessageType = {message: newMessage}
         this._state.dialogsPage.messages.push(message)
         this._rerenderEntireTree(this._state)
     },
     changeMessageText(text: string) {
         this._state.dialogsPage.newMessage = text
         console.log(this._state.dialogsPage.newMessage)
         this._rerenderEntireTree(this._state)
         this._state.dialogsPage.newMessage = ''
     },*/
    subscriber(observer) {
        this._rerenderEntireTree = observer
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let message: PostType = {
                post: action.newPost,
                like: '0 likes'
            }
            this._state.profilePage.posts.push(message)
            this._rerenderEntireTree()
            this._state.profilePage.newPostText = ''
        } else if (action.type === 'CHANGE-POST-TEXT') {
            this._state.profilePage.newPostText = action.text
            console.log(action.text)
            this._rerenderEntireTree()
        } else if (action.type === 'ADD-MESSAGE') {
            let message: MessageType = {message: action.newMessage}
            this._state.dialogsPage.messages.push(message)
            this._rerenderEntireTree()
            this._state.dialogsPage.newMessage = ''
        } else if (action.type === 'CHANGE-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessage = action.text
            console.log(this._state.dialogsPage.newMessage)
            this._rerenderEntireTree()
        }
    }
}