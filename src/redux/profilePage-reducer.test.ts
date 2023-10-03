import profilePageReducer, {addPostAC} from "./profilePage-reducer";
import {v1} from "uuid";
import {ProfilePageType} from "../components/Profile/MyPosts/MyPosts";


let startState = {} as ProfilePageType

beforeEach(() => {
    startState  = {
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
})


test('New post should be added', () => {

    let action = addPostAC('hello')
    let endState = profilePageReducer(startState, action)

    expect(endState.posts.length).toBe(3)
})