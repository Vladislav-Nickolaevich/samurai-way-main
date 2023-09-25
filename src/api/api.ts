import axios from "axios";
import {FormDataType} from "../components/Login/Login";


const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': 'db3b9d4e-6f70-4aac-89fe-8979d865447d'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})


export const userAPI = {
    getUsers(currentPage: number, pageSize: number){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId: number){
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollow(userId: number){
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
}

export const profileAPI = {
    getProfile(userId: string){
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId: string){
        return instance.get(`/profile/status/${userId}`)
    },
    updateStatus(status: string){
        return instance.put(`/profile/status`, {status: status})
    },
}
export const authAPI = {
    authMe(){
        return instance.get<ResponseType<UserResponseType>>(`auth/me`)
            .then(response => response.data)
    },
    login(data: FormDataType){
        return instance.post<ResponseType<{userId: number}>>('auth/login', data)
            .then(res => res.data)
    },
    logout(){
        return instance.delete<ResponseType>('auth/login')
            .then(res => res.data)
    },
}

type ResponseType <T = {}> = {
    resultCode: number
    messages: []
    data: T
}
export type UserResponseType = {
    id: number | null
    login: string | null
    email: string | null
}