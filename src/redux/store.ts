import {NavbarType} from "../components/Navbar/Navbar";
import {messageType, userNameType} from "../components/Dialogs/Dialogs";
import {ProfilePageType} from "../components/Profile/Profile";



export type MessagesPageType = {
    userName: userNameType[]
    messages: messageType[]
    newMessageText: string
}
export type AppType = {
    navbar: NavbarType
    messagesPage: MessagesPageType
    profilePage: ProfilePageType
}


// export type StoreType = {_state: AppType, _callSubscriber(state: AppType): void, getState(): AppType, subscribe(observer: (state: AppType) => void): void, dispatch(action: any): void}

// export let store= {
//     _state: <AppType>{
//         navbar: {
//             sidebar: [
//                 {id: v1(), path: path.PROFILE, title: 'Profile'},
//                 {id: v1(), path: path.DIALOGS, title: 'Messages'},
//                 {id: v1(), path: path.NEWS, title: 'News'},
//                 {id: v1(), path: path.MUSIC, title: 'Music'},
//                 {id: v1(), path: path.SETTINGS, title: 'Settings'},
//             ],
//             friends: {
//                 title: 'Friends',
//                 imgFriends: [
//                     {
//                         id: 1,
//                         img: 'https://png.pngtree.com/png-clipart/20201031/ourmid/pngtree-light-orange-circle-clipart-png-image_2382174.jpg',
//                         err: 'Error'
//                     },
//                     {
//                         id: 2,
//                         img: 'https://png.pngtree.com/png-clipart/20201031/ourmid/pngtree-light-orange-circle-clipart-png-image_2382174.jpg',
//                         err: 'Error'
//                     },
//                     {
//                         id: 3,
//                         img: 'https://png.pngtree.com/png-clipart/20201031/ourmid/pngtree-light-orange-circle-clipart-png-image_2382174.jpg',
//                         err: 'Error'
//                     }
//                 ]
//             }
//         },
//         messagesPage: {
//             messages: [
//                 {id: 1, message: 'Hi'},
//                 {id: 2, message: 'What is the best country for travelling?'},
//                 {id: 3, message: 'I like country with sea'},
//                 {id: 4, message: 'I want to see interesting places'},
//             ],
//             userName: [
//                 {
//                     id: 1,
//                     userName: 'Vlad',
//                     img: "https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg"
//                 },
//                 {
//                     id: 2,
//                     userName: 'Alex',
//                     img: "https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg"
//                 },
//                 {
//                     id: 3,
//                     userName: 'Katya',
//                     img: "https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg"
//                 },
//                 {
//                     id: 4,
//                     userName: 'John',
//                     img: "https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg"
//                 },
//             ],
//             newMessageText: ''
//
//         },
//         profilePage: {
//             posts: [
//                 {
//                     id: v1(),
//                     likeCounts: 10,
//                     mes: 'Hi',
//                     photo: "https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg",
//                     errorMes: 'Image not found'
//                 },
//                 {
//                     id: v1(),
//                     likeCounts: 15,
//                     mes: "It's my first post",
//                     photo: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg",
//                     errorMes: 'Image not found'
//                 },
//             ],
//             newPostText: ''
//         },
//     },
//     _callSubscriber(state: AppType) {
//         console.log('rerender')
//     },
//
//     getState() {
//         return this._state
//     },
//     subscribe(observer: (state: AppType) => void) {
//         this._callSubscriber = observer
//     },
//
//     dispatch(action: any) {
//         this._state.profilePage = profilePageReducer(this._state.profilePage, action)
//         this._state.messagesPage = messagesPageReducer(this._state.messagesPage, action)
//         this._state.navbar = navbarReducer(this._state.navbar, action)
//         this._callSubscriber(this._state)
//     }
// }

