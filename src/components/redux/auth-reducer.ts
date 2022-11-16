const SET_AUTH_DATA = 'SET_AUTH_DATA'
const IS_FETCHING = 'IS_FETCHING'

export type PostType = {
    post: string
    like: string
}
export type ResponseDataType = {
    id: number
    email: string | null
    login: string | null
}
export type AuthType = {
    data: ResponseDataType
    isFetching: boolean
}

type setAuthData = {
    type: 'SET_AUTH_DATA',
    data: AuthType
}
type ToggleIsFetching = {
    type: 'IS_FETCHING'
    isFetching: boolean
}
type ActionsTypes = setAuthData | ToggleIsFetching

const initialState: AuthType = {
    data: {
        id: 0,
        email: null,
        login: null
    },
    isFetching: false
}

export function authReducer(state: AuthType = initialState, action: ActionsTypes): AuthType {
    if (action.type === SET_AUTH_DATA) {
        return {
            ...state,
            ...action.data
        }
    } else if (action.type === IS_FETCHING) {
        return {...state, isFetching: action.isFetching}
    }
    return {...state}
}

export const setAuthData = (data: ResponseDataType) => ({type: SET_AUTH_DATA, data} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: IS_FETCHING, isFetching} as const)