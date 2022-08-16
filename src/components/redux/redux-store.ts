import {combineReducers, createStore, legacy_createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";


export type AppStateType = ReturnType<typeof rootReducer>
const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

export const store = legacy_createStore(rootReducer)
