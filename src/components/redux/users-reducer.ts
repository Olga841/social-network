const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const IS_FETCHING = 'IS_FETCHING'

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
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean

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
    users: Array<UserType>,
    totalCount: number
}

type SetCurrentPage = {
    type: 'SET-CURRENT-PAGE'
    currentPage: number
}
type ToggleIsFetching = {
    type: 'IS_FETCHING'
    isFetching: boolean
}

type ActionsTypes = Follow | UnFollow | SetUsers | SetCurrentPage | ToggleIsFetching

const initialState: UsersPageType = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
        return {...state, users: action.users, totalUsersCount: action.totalCount}
    } else if (action.type === SET_CURRENT_PAGE) {
        return {...state, currentPage: action.currentPage}
    } else if (action.type === IS_FETCHING) {
        return {...state, isFetching: action.isFetching}
    }
    return {...state}
}

export const followAC = (userID: number) => ({type: FOLLOW, userID} as const)
export const unfollowAC = (userID: number) => ({type: UNFOLLOW, userID} as const)
export const setUsersAC = (users: Array<UserType>, totalCount: number) => ({
    type: SET_USERS,
    users,
    totalCount
} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: IS_FETCHING, isFetching} as const)
