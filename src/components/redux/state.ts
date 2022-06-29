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
}
type dialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: dialogsPageType
}

export const state: RootStateType = {
    profilePage: {
        posts: [
            {post: "This is my first post! Let's fly!", like: '2 likes'},
            {post: "Oh! This social network is awesome!", like: '2 likes'}
        ],
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
        ]
    }
}

export function addPost(newPost: string) {
    let message: PostType = {
        post: newPost,
        like: '0 likes'
    }
    state.profilePage.posts.push(message)
}