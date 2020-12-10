import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "ui-module/App/App";
import { createStore } from "redux-dynamic-modules-core";
import { getSagaExtension } from "redux-dynamic-modules-saga";

const store = createStore({
    extensions: [getSagaExtension()],
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
