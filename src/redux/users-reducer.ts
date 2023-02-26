import {v1} from "uuid";
import {UserType} from "../components/Users/Users";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'


export type UsersType = {
    users: UserType[]
}
let img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/John_Cena_July_2018.jpg/1200px-John_Cena_July_2018.jpg'
let initialState = {
    users: [
        {
            id: v1(), photoUrl: img, followed: false, fullName: 'George', status: 'Successful man',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: v1(), photoUrl: img, followed: true, fullName: 'John', status: 'Dreamer..',
            location: {city: 'Los Angeles', country: 'USA'}
        },
        {
            id: v1(), photoUrl: img, followed: false, fullName: 'Viktoria', status: 'Woman with the right habits',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: v1(), photoUrl: img, followed: true, fullName: 'Ann', status: 'Just Ann:)',
            location: {city: 'Brest', country: 'Belarus'}
        },
    ]
}


const userReducer = (state: UsersType = initialState, action: any): UsersType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ?
                    {...u, followed: false} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ?
                    {...u, followed: true} : u)
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export const followAC = (userId: string) => ({type: FOLLOW, userId})
export const unfollowAC = (userId: string) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: UserType[]) => ({type: SET_USERS, users})

export default userReducer

