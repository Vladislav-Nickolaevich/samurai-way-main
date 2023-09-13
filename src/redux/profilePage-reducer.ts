import {v1} from "uuid";
import {ProfilePageType} from "../components/Profile/MyPosts/MyPosts";
import {ProfileUserType} from "../components/Profile/Profile";
import {Action, Dispatch} from "redux";
import {profileAPI} from "../api/api";

export const ADD_POST = 'ADD-POST'
export const SET_USER_PROFILE = 'SET-USER-PROFILE'
export const SET_STATUS = 'SET-STATUS'

let initialState = {
    posts: [
        {
            id: v1(),
            likeCounts: 10,
            mes: 'Hi',
            photo: "https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg",
            errorMes: 'Image not found'
        },
        {
            id: v1(),
            likeCounts: 15,
            mes: "It's my first post",
            photo: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg",
            errorMes: 'Image not found'
        },
    ],
    profile: {
        aboutMe: '',
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: '',
        },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: 0,
        photos: {
            small: '',
            large: '',
        }
    },
    status: ''
}

const profilePageReducer = (state: ProfilePageType = initialState, action: any): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: v1(),
                likeCounts: 0,
                mes: action.mes,
                photo: "https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg",
                errorMes: 'Image not found'
            }

            return {
                ...state, posts: [newPost, ...state.posts],
            }
        case SET_USER_PROFILE: {
            return{
                ...state, profile: action.profile
            }
        }
        case SET_STATUS:
            return {
                ...state, status: action.status
            }
        default:
            return state
    }
}

export const addPostAC = (mes: string) => ({type: ADD_POST, mes})
const setUserProfile = (profile: ProfileUserType) => ({type: SET_USER_PROFILE, profile})
const setStatus = (status: string) => ({type: SET_STATUS, status})

export const getUserProfile = (userId: string) => {
    return (dispatch: Dispatch<Action>) =>{
        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}

export const getUserStatus = (userId: string) => {
    return (dispatch: Dispatch<Action>) =>{
        profileAPI.getStatus(userId)
            .then(data => {
                dispatch(setStatus(data.data))
            })
    }
}

export const updateUserStatus = (status: string) => {
    return (dispatch: Dispatch<Action>) =>{
        profileAPI.updateStatus(status)
            .then(data => {
                if(data.data.resultCode === 0){
                    dispatch(setStatus(status))
                }
            })
    }
}

export default profilePageReducer

