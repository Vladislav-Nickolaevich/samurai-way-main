import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {NavbarType} from "./components/Navbar/Navbar";
import {v1} from "uuid";
import {path} from "./components/Constans/Constans";
import {PostType} from "./components/Profile/MyPosts/Posts/Post";
import {ChatType} from "./components/Dialogs/Dialogs";


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
const chat: ChatType[] = [
    {id: v1(), userName: 'Vlad', message: 'Hi'},
    {id: v1(), userName: 'Alex', message: 'What is the best country for travelling?'},
    {id: v1(), userName: 'Katya', message: 'I like country with sea'},
    {id: v1(), userName: 'John', message: 'I want to see interesting places'},
]

ReactDOM.render(<BrowserRouter>
        <App posts={posts} navbar={navbar} chat={chat}/>
    </BrowserRouter>
    , document.getElementById('root'));


