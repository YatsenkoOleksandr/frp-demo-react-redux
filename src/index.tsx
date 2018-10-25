import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { appStore } from "./app/store/store";
import AppComponent from "./app/app";



ReactDOM.render(
    <Provider store={appStore}>
        <AppComponent/>
    </Provider>,
    document.getElementById("app")
);