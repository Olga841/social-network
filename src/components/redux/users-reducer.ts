import {Dispatch} from "redux";
import {usersAPI} from "../../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const IS_FETCHING = 'IS_FETCHING'
const DISABLED = 'DISABLED'

export type UserType = {
    id: number,
    name: string,
    photoURL: string,
    followed: boolean,
    status: string,
    photos: { small: string, large: string }
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
    disabled: boolean
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
type ToggleDisabled = {
    type: 'DISABLED'
    disabled: boolean
}

type ActionsTypes = Follow | UnFollow | SetUsers | SetCurrentPage | ToggleIsFetching | ToggleDisabled

const initialState: UsersPageType = {
    users: [
        {
            id: 1254,
            name: 'string',
            photoURL: 'string',
            followed: false,
            status: 'string',
            photos: {small: 'string', large: 'string'},
            location: {
                city: 'string',
                country: 'string'
            }
        }
    ],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    disabled: false
}


export function usersReducer(state: UsersPageType = initialState, action: ActionsTypes): UsersPageType {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state, users: action.users, totalUsersCount: action.totalCount}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case DISABLED:
            return {...state, disabled: action.disabled}
    }
    return {...state}
}

export const follow = (userID: number) => ({type: FOLLOW, userID} as const)
export const unfollow = (userID: number) => ({type: UNFOLLOW, userID} as const)
export const setUsers = (users: Array<UserType>, totalCount: number) => ({
    type: SET_USERS,
    users,
    totalCount
} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: IS_FETCHING, isFetching} as const)
export const toggleDisabled = (disabled: boolean) => ({type: DISABLED, disabled} as const)

export const getAllUsersThunkCreator = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    usersAPI.getAllUsers(currentPage, pageSize).then(response => {
        debugger
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(response.data.items, response.data.totalCount))
    })
}
