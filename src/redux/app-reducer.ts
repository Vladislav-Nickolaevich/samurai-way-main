import {getAuthMeData} from "./auth-reducer";
import {AnyAction} from "redux";
import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "./redux-store";

const appReducer = (state: InitialStateType = initialState, action: InitializedSuccessACType): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}
type InitializedSuccessACType = ReturnType<typeof initializedSuccessAC>
const initializedSuccessAC = () => ({type: INITIALIZED_SUCCESS} as const)

export const initializeAppTC = () => {
    return (dispatch: ThunkDispatch<AppRootStateType, any, AnyAction >) => {
       let promise =  dispatch(getAuthMeData())
        Promise.all([promise])
            .then(() => dispatch(initializedSuccessAC()))
    }
}

export default appReducer

const INITIALIZED_SUCCESS = 'app/INITIALIZED-SUCCESS'

export type InitialStateType = typeof initialState
let initialState = {initialized: false}
