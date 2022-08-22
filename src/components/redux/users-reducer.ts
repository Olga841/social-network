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
export type UsersPageType = {
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
    users: UsersPageType
}

type ActionsTypes = Follow | UnFollow | SetUsers

const initialState: UsersPageType = {
    users: [
        {
            id: 1,
            name: 'Vova',
            photoURL: 'https://cdn.icon-icons.com/icons2/1371/PNG/512/vladimirlenin_90818.png',
            followed: true,
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            name: 'Vitya',
            photoURL: 'https://cdn.icon-icons.com/icons2/1371/PNG/512/vladimirlenin_90818.png',
            followed: false,
            status: 'I am a boss too',
            location: {city: 'London', country: 'GB'}
        },
        {
            id: 3,
            name: 'Vasya',
            photoURL: 'https://cdn.icon-icons.com/icons2/1371/PNG/512/vladimirlenin_90818.png',
            followed: true,
            status: 'Buy an elephant',
            location: {city: 'Paris', country: 'France'}
        },
    ],
}


export function usersReducer(state: UsersPageType = initialState, action: ActionsTypes): UsersPageType {
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
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users} as const)
