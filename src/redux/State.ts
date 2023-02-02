import {NavbarType} from "../components/Navbar/Navbar";
import {v1} from "uuid";
import {path} from "../components/Constans/Constans";
import {PostType} from "../components/Profile/MyPosts/Posts/Post";
import {messageType, userNameType} from "../components/Dialogs/Dialogs";

export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}
export type MessagesPageType = {
    userName: userNameType[]
    messages: messageType[]
}
export type AppType = {
    navbar: NavbarType
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}

export let store = {
    _state: <AppType>{
        navbar: {
            sidebar: [
                {id: v1(), path: path.PROFILE, title: 'Profile'},
                {id: v1(), path: path.DIALOGS, title: 'Messages'},
                {id: v1(), path: path.NEWS, title: 'News'},
                {id: v1(), path: path.MUSIC, title: 'Music'},
                {id: v1(), path: path.SETTINGS, title: 'Settings'},
            ],
            friends: {
                title: 'Friends',
                imgFriends: [
                    {
                        id: 1,
                        img: 'https://png.pngtree.com/png-clipart/20201031/ourmid/pngtree-light-orange-circle-clipart-png-image_2382174.jpg',
                        err: 'Error'
                    },
                    {
                        id: 2,
                        img: 'https://png.pngtree.com/png-clipart/20201031/ourmid/pngtree-light-orange-circle-clipart-png-image_2382174.jpg',
                        err: 'Error'
                    },
                    {
                        id: 3,
                        img: 'https://png.pngtree.com/png-clipart/20201031/ourmid/pngtree-light-orange-circle-clipart-png-image_2382174.jpg',
                        err: 'Error'
                    }
                ]
            }
        },
        messagesPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'What is the best country for travelling?'},
                {id: 3, message: 'I like country with sea'},
                {id: 4, message: 'I want to see interesting places'},
            ],
            userName: [
                {
                    id: 1,
                    userName: 'Vlad',
                    img: "https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg"
                },
                {
                    id: 2,
                    userName: 'Alex',
                    img: "https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg"
                },
                {
                    id: 3,
                    userName: 'Katya',
                    img: "https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg"
                },
                {
                    id: 4,
                    userName: 'John',
                    img: "https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg"
                },
            ],
        },
        profilePage: {
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
            newPostText: ''
        },
    },
    _callSubscriber(state: AppType) {
        console.log('rerender')
    },

    getState() {
        return this._state
    },
    subscribe(observer: (state: AppType) => void) {
        this._callSubscriber = observer
    },

    dispatch(action: any) {
        if (action.type === 'ADD-POST') {
            const newPost = {
                id: v1(),
                likeCounts: 0,
                mes: this._state.profilePage.newPostText,
                photo: "https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg",
                errorMes: 'Image not found'
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }
}