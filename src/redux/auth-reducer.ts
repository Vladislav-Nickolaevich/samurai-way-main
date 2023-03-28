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

export const setAuthUserData = (data: DataAuthType) => ({type: SET_AUTH_DATA, data})


export default authReducer

