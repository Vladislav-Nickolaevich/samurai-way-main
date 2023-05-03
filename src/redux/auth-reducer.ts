import {Action, Dispatch} from "redux";
import {userAPI} from "../api/api";

const SET_AUTH_DATA = 'SET-AUTH-DATA'

export type DataAuthType = {
    userId: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}


const authReducer = (state: DataAuthType = initialState, action: any): DataAuthType => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state
    }
}

const setAuthUserData = (data: DataAuthType) => ({type: SET_AUTH_DATA, data})

export const getAuthMeData = () => {
    return (dispatch: Dispatch<Action>) => {
        userAPI.authMe()
            .then(response => {
                if(response.resultCode === 0){
                    dispatch(setAuthUserData(response.data))
                }
            })
    }
}

export default authReducer

