import {authAPI, UserResponseType} from "../api/api";
import {FormDataType} from "../components/Login/Login";
import {AppThunk} from "./redux-store";

const authReducer = (state: DataAuthType = initialState, action: LoginActionsType): DataAuthType => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: action.isAuth
            }
        default:
            return state
    }
}
type SetAuthUserDataType = ReturnType<typeof setAuthUserData>
const setAuthUserData = (data: UserResponseType, isAuth: boolean) => ({type: SET_AUTH_DATA, data, isAuth} as const)

export const getAuthMeData = (): AppThunk => {
    return (dispatch) => {
        authAPI.authMe()
            .then(response => {
                if(response.resultCode === 0){
                    dispatch(setAuthUserData(response.data, true))
                }
            })
    }
}

export const loginTC = (data: FormDataType): AppThunk => {
    return (dispatch) => {
        authAPI.login(data)
            .then(response => {
                if(response.resultCode === 0){
                    dispatch(getAuthMeData())
                }
            })
    }
}

export const logoutTC = (): AppThunk => {
    return (dispatch) => {
        authAPI.logout()
            .then(response => {
                if(response.resultCode === 0){
                    dispatch(setAuthUserData({id: null, login: null, email: null,}, false))
                }
            })
    }
}

export default authReducer


const SET_AUTH_DATA = 'SET-AUTH-DATA'

export type DataAuthType = UserResponseType & {
    isAuth: boolean
}
let initialState: DataAuthType = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}
export type LoginActionsType = SetAuthUserDataType