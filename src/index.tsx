import "./index.scss";
import { ThemeProvider } from "@mui/material";
import ReactDOM from "react-dom/client";
import theme from "./theme";
import GlobalState from "./ts/helpers/globalState";
import App from "./ts/app";

const globalState = new GlobalState();

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
    <ThemeProvider theme={theme}>
        <App globalState={globalState}/>
    </ThemeProvider>
);
