import {applyMiddleware, combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePage-reducer";
import messagesPageReducer from "./messagesPage-reducer";
import navbarReducer from "./navbar-reducer";
import usersReducer from "./users-reducer";
import authReducer, {LoginActionsType} from "./auth-reducer";
import thunk, {ThunkAction} from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import appReducer from "./app-reducer";

let reducers = combineReducers({
    navbar: navbarReducer,
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

let store = createStore(reducers, applyMiddleware(thunk))
export type AppRootStateType = ReturnType<typeof reducers>

export type ActionsType = LoginActionsType

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, ActionsType>

export default store