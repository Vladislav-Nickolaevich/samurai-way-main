import {Dispatch} from "redux";
import {userAPI} from "../api/api";
import {UserContainerType} from "../components/Users/UsersContainer";

let initialState: UsersType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const userReducer = (state: UsersType = initialState, action: UsersActionsType): UsersType => {
    switch (action.type) {
        case FOLLOW_UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ?
                    {...u, followed: action.followOrUnfollow} : u)
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.count
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state, followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(el => el !== action.userId)
            }
        }
        default:
            return state
    }
}

export const followUnfollowSuccess = (userId: number, followOrUnfollow: boolean) => ({type: FOLLOW_UNFOLLOW, userId, followOrUnfollow} as const)
export const setUsers = (users: UserContainerType[]) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (count: number) => ({type: SET_TOTAL_USERS_COUNT, count} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
} as const)


export const getUsersTC = (currentPage: number, pageSize: number) => async (dispatch: Dispatch<UsersActionsType>) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(currentPage))

    let data = await userAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
}

const followUnfollowFlow = async (userId: number, dispatch: Dispatch<UsersActionsType>, apiMethod: (userId: number) => any, followOrUnfollow: boolean) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    let data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(followUnfollowSuccess(userId, followOrUnfollow))
    }
    dispatch(toggleIsFollowingProgress(false, userId))
}

export const followTC = (userId: number) => async (dispatch: Dispatch<UsersActionsType>) => {
    await followUnfollowFlow(userId,dispatch, userAPI.follow.bind(userAPI), true)
}
export const unfollowTC = (userId: number) => async (dispatch: Dispatch<UsersActionsType>) => {
    await followUnfollowFlow(userId, dispatch, userAPI.unfollow.bind(userAPI), false)
}


export default userReducer

type UsersActionsType = ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleIsFollowingProgress>
    | ReturnType<typeof followUnfollowSuccess>

export type UsersType = {
    users: UserContainerType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}


const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'
const FOLLOW_UNFOLLOW = 'FOLLOW_UNFOLLOW'