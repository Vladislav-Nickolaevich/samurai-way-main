import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPost, AppType, state, subscribe, updateNewPostText} from "./redux/State";
import React from "react";

let  rerenderEntireTree = (state: AppType) => {
    ReactDOM.render(<BrowserRouter>
            <App appState={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>
        , document.getElementById('root'));
}
rerenderEntireTree(state)
subscribe(rerenderEntireTree)


