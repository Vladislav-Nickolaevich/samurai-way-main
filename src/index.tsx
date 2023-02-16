import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import store, {AppRootStateType} from "./redux/redux-store";
import {Provider} from "react-redux";


let rerenderEntireTree = (state: AppRootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App
                    // state={store.getState()}
                    // dispatch={store.dispatch.bind(store)}
                />
            </Provider>

        </BrowserRouter>
        , document.getElementById('root'));
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})


