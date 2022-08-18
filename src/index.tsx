import "./index.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import theme from "./theme";
import GlobalState from "./ts/helpers/globalState";
import { Theme } from "@mui/material";
import Apis from "./ts/interfaces/Apis";
import App from "./ts/app";
import { BrowserRouter } from "react-router-dom";

export interface ApiResponse<T> {
    items: T;
}

const apis: Apis = {
    sidebarItems: null,
    avatar: null,
    notifications: null,
};
(window as any).GlobalState = GlobalState;

const root = ReactDOM.createRoot(document.querySelector("#root"));

export const ThemeContext = React.createContext<Theme>(theme);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
GlobalState.initialize(apis);