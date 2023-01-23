import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {NavbarType} from "./components/Navbar/Navbar";
import {v1} from "uuid";
import {path} from "./components/Constans/Constans";
import {PostType} from "./components/Profile/MyPosts/Posts/Post";
import {messageType, userNameType} from "./components/Dialogs/Dialogs";


const navbar: NavbarType[] = [
    {id: v1(), path: path.PROFILE, title: 'Profile'},
    {id: v1(), path: path.DIALOGS, title: 'Messages'},
    {id: v1(), path: path.NEWS, title: 'News'},
    {id: v1(), path: path.MUSIC, title: 'Music'},
    {id: v1(), path: path.SETTINGS, title: 'Settings'},
]
const posts: PostType[] = [
    {
        id:v1(),
        likeCounts: 10,
        mes: 'Hi',
        photo: "https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg",
        errorMes: 'Image not found'
    },
    {
        id:v1(),
        likeCounts: 15,
        mes: "It's my first post",
        photo: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg",
        errorMes: 'Image not found'
    },
]
const messages: messageType[] = [
    {id: 1,  message: 'Hi'},
    {id: 2,  message: 'What is the best country for travelling?'},
    {id: 3,  message: 'I like country with sea'},
    {id: 4,  message: 'I want to see interesting places'},
]

const userName: userNameType[] = [
    {id: 1, userName: 'Vlad'},
    {id: 2, userName: 'Alex'},
    {id: 3, userName: 'Katya'},
    {id: 4, userName: 'John'},
]

ReactDOM.render(<BrowserRouter>
        <App posts={posts} navbar={navbar} userName={userName} message={messages}/>
    </BrowserRouter>
    , document.getElementById('root'));


