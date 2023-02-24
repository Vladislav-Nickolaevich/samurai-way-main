import {v1} from "uuid";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

type LocationType = {
    city: string,
    country: string
}
type UsersType = {
    id: string,
    followed: boolean,
    fullName: string,
    status: string,
    location:LocationType
}
type StateUsersType = {
    users: UsersType[]
}

let initialState = {
    users: [
        {id: v1(), followed: false, fullName: 'George', status: 'Successful man',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {id: v1(), followed: true, fullName: 'John', status: 'Dreamer..',
            location:{city: 'Los Angeles', country: 'USA'}
        },
        {id: v1(), followed: false, fullName: 'Viktoria', status: 'Woman with the right habits',
            location:{city: 'Moscow', country: 'Russia'}
        },
        {id: v1(), followed: true, fullName: 'Ann', status: 'Just Ann:)',
            location:{city: 'Brest', country: 'Belarus'}
        },
    ]
}



const userReducer = (state : StateUsersType= initialState, action: any) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId?
                    {...u, followed:true}: u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId?
                    {...u, followed: false}: u)
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
    }
}

export const followAC = (userId: string) => ({type: FOLLOW, userId})
export const unfollowAC = (userId: string) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users:UsersType) => ({type: SET_USERS})

export default userReducer

