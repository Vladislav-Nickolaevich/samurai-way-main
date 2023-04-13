import axios from "axios";


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
    postFollow(userId: number, {}){
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    deleteUnfollow(userId: number){
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    }
}

