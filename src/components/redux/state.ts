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

const store = {
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
    _rerenderEntireTree() {
        alert('?')
    },
    addPost(newPost: string) {
        let message: PostType = {
            post: newPost,
            like: '0 likes'
        }
        this._state.profilePage.posts.push(message)
        this._rerenderEntireTree()
    },
    changePostText(text: string) {
        this._state.profilePage.newPostText = text
        console.log(text)
        this._rerenderEntireTree()
        this._state.profilePage.newPostText = ''
    },
    addMessage(newMessage: string) {
        let message: MessageType = {message: newMessage}
        this._state.dialogsPage.messages.push(message)
        this._rerenderEntireTree()
    },
    changeMessageText(text: string) {
        this._state.dialogsPage.newMessage = text
        console.log(this._state.dialogsPage.newMessage)
        this._rerenderEntireTree()
        this._state.dialogsPage.newMessage = ''
    },
    subscriber(observer: () => void) {
        this._rerenderEntireTree = observer
    }
}