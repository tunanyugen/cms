import { Box } from "@mui/material";
import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import GlobalState from "./helpers/globalState";

export interface AppProps {
    globalState: GlobalState;
}

let subscriptionId = "";

function App(props: AppProps) {
    const [renderLoopCount, forceUpdate] = useState(0);
    subscriptionId = subscriptionId.length > 0 ? subscriptionId : props.globalState.subscribe(() => {
        props.globalState.unsubscribe(subscriptionId);
        forceUpdate(renderLoopCount + 1);
    });
    return (
        <Box
            sx={{
                width: 270,
                height: window.innerHeight,
            }}
        >
            <Sidebar items={props.globalState.state.sidebarItems} />
        </Box>
    );
}

export default App;
