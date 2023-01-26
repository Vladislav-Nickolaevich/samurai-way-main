import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPost, AppType} from "./redux/State";
import React from "react";

export let  rerenderEntireTree = (state: AppType) => {
    ReactDOM.render(<BrowserRouter>
            <App appState={state} addPost={addPost} />
        </BrowserRouter>
        , document.getElementById('root'));
}

