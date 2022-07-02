let rerenderEntireTree = () => {
    alert('?')
}

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

export const state: RootStateType = {
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
}

export function addPost(newPost: string) {
    let message: PostType = {
        post: newPost,
        like: '0 likes'
    }
    state.profilePage.posts.push(message)
    rerenderEntireTree()
}

export function changePostText(text: string) {
    state.profilePage.newPostText = text
    console.log(text)
    rerenderEntireTree()
    state.profilePage.newPostText = ''
}

export function addMessage(newMessage: string) {
    let message: MessageType = {message: newMessage}
    state.dialogsPage.messages.push(message)
    rerenderEntireTree()
}

export function changeMessageText(text: string) {
    state.dialogsPage.newMessage = text
    console.log(state.dialogsPage.newMessage)
    rerenderEntireTree()
    state.dialogsPage.newMessage = ''
}

export let subscriber = (observer: () => void) => {
    rerenderEntireTree = observer
}