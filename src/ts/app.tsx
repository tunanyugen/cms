import * as React from "react";
import { Box, Paper } from "@mui/material";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import GlobalState from "./helpers/globalState";
import Calculator from "./helpers/calculator/Calculator";
import { ThemeContext } from "..";

export interface AppProps {}

export interface AppState {
    renderLoopCount: number;
}

class App extends React.Component<AppProps, AppState> {
    private _subscriptionId: string;
    static themeContext = ThemeContext;
    constructor(props: AppProps) {
        super(props);
        this._subscriptionId = GlobalState.subscribe(() => {
            this.forceUpdate();
        });
        window.addEventListener("resize", () => {
            this.forceUpdate();
        });
    }
    render() {
        return (
            <Box
                className="app"
                sx={{
                    gap: GlobalState.state.theme.spacing(),
                }}
            >
                <Box className="app__left-column">
                    <Box
                        className="app__sidebar-container"
                        sx={{
                            width: GlobalState.state.config.sidebarX,
                        }}
                    >
                        <Sidebar />
                    </Box>
                </Box>
                <Box
                    className="app__right-column"
                    sx={{
                        gap: GlobalState.state.theme.spacing(),
                        width: Calculator.CalculateNavbarX(),
                    }}
                >
                    <Box
                        className="app__navbar-container"
                        sx={{
                            flex: `0 0 ${GlobalState.state.config.navbarY}px`,
                        }}
                    >
                        <Navbar />
                    </Box>
                    <Paper className="app__content-container"></Paper>
                </Box>
            </Box>
        );
    }
}

export default App;
