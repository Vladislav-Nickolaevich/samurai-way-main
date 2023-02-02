import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {store, AppType} from "./redux/State";
import React from "react";

let  rerenderEntireTree = (state: AppType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                appState={store.getState()}
                dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>
        , document.getElementById('root'));
}
rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)


