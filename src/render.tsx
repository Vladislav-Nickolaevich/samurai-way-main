import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPost, AppType, updateNewPostText} from "./redux/State";
import React from "react";

export let  rerenderEntireTree = (state: AppType) => {
    console.log('rerenderEntireTree')
    ReactDOM.render(<BrowserRouter>
            <App appState={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>
        , document.getElementById('root'));
}

