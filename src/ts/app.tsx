import { Box, Paper } from "@mui/material";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import GlobalState, { GlobalStateAttributes } from "./helpers/globalState";
import Calculator from "./helpers/calculator/Calculator";
import { ThemeContext } from "..";
import ArticleForm from "./components/Form/ArticleForm";
import Component from "./component";
import { Routes, Route } from "react-router-dom";

export interface AppProps {}

export interface AppState {
    renderLoopCount: number;
}

class App extends Component<AppProps, AppState> {
    static themeContext = ThemeContext;
    constructor(props: AppProps) {
        super(props);
        this._subscriptionIndices = GlobalState.bulkSubscribe(
            [
                GlobalStateAttributes.theme,
                GlobalStateAttributes.languages,
                GlobalStateAttributes.sidebarX,
                GlobalStateAttributes.navbarY,
            ],
            () => {
                if (this._mounted) {
                    this.forceUpdate();
                }
            }
        );
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
                            width: GlobalState.state.sidebarX,
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
                            flex: `0 0 ${GlobalState.state.navbarY}px`,
                        }}
                    >
                        <Navbar />
                    </Box>
                    <Paper className="app__content-container">
                        <Routes>
                            <Route path="*" element={<ArticleForm id="" parentArticleTitle="" title="" content="" />} />
                        </Routes>
                    </Paper>
                </Box>
            </Box>
        );
    }
}

export default App;
