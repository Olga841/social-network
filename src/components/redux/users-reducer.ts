const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

export type UserType = {
    id: number,
    name: string,
    photoURL: string,
    followed: boolean,
    status: string,
    location: LocationType
}
export type LocationType = {
    city: string
    country: string
}
export type InitialStateType = {
    users: Array<UserType>
}
type Follow = {
    type: 'FOLLOW'
    userID: number
}
type UnFollow = {
    type: 'UNFOLLOW'
    userID: number
}
type SetUsers = {
    type: 'SET-USERS',
    users: InitialStateType
}

type ActionsTypes = Follow | UnFollow | SetUsers

const initialState: InitialStateType = {
    users: [
        {
            id: 1,
            name: 'Vova',
            photoURL: 'https://www.reddit.com/user/V-L-A-D-I-M-I-R/',
            followed: true,
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            name: 'Vitya',
            photoURL: 'https://www.reddit.com/user/V-L-A-D-I-M-I-R/',
            followed: false,
            status: 'I am a boss too',
            location: {city: 'London', country: 'GB'}
        },
        {
            id: 3,
            name: 'Vasya',
            photoURL: 'https://www.reddit.com/user/V-L-A-D-I-M-I-R/',
            followed: true,
            status: 'Buy an elephant',
            location: {city: 'Paris', country: 'France'}
        },
    ],
}


export function dialogsReducer(state: InitialStateType = initialState, action: ActionsTypes): InitialStateType {
    if (action.type === FOLLOW) {
        return {
            ...state,
            users: state.users.map(u => {
                if (u.id === action.userID) {
                    return {...u, followed: false}
                }
                return u
            })
        }
    } else if (action.type === UNFOLLOW) {
        return {
            ...state,
            users: state.users.map(u => {
                if (u.id === action.userID) {
                    return {...u, followed: true}
                }
                return u
            })
        }
    } else if (action.type === SET_USERS) {
        return {...state, ...action.users}
    }
    return {...state}
}

export const followAC = (userID: number) => ({type: FOLLOW, userID} as const)
export const unfollowAC = (userID: number) => ({type: UNFOLLOW, userID} as const)
export const setUsersAC = (users: InitialStateType) => ({type: SET_USERS, users} as const)
