import {combineReducers, createStore, legacy_createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {ActionsTypes, DialogsPageType, ProfilePageType, RootStateType} from "./store";

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _rerenderEntireTree: () => void
    subscriber: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}
export type ReducersType = ReturnType<typeof reducers>
const reducers = combineReducers({
    profileReducer,
    dialogsReducer
})
//export const store: ReducersType = createStore(reducers)
export const store = legacy_createStore(reducers)

// export default store