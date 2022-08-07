import { Avatar, Box, Grow, IconButton, Paper } from "@mui/material";
import React from "react";
import GlobalState from "../../helpers/globalState";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import NavbarNotificationsNotification from "./NavbarNotificationsNotification";

export interface NavbarNotificationsProps {}

export interface NavbarNotificationsState {
    open: boolean;
}

class NavbarNotifications extends React.Component<
    NavbarNotificationsProps,
    NavbarNotificationsState
> {
    constructor(props: NavbarNotificationsProps) {
        super(props);
        this.state = {
            open: false,
        };
    }
    render() {
        return (
            <Box className="navbar__notifications">
                <IconButton
                    onClick={() => {
                        this.setState({ open: !this.state.open });
                    }}
                    sx={{
                        padding: `calc(${GlobalState.state.theme.spacing()} / 2)`,
                        borderRadius:
                            GlobalState.state.theme.shape.borderRadius,
                    }}
                >
                    <NotificationsNoneOutlinedIcon />
                </IconButton>
                <Grow
                    in={this.state.open}
                    style={{ transformOrigin: "100% 0%" }}
                >
                    <Paper
                        className="navbar__notifications__wrapper"
                    >
                        {this.renderNotifications()}
                    </Paper>
                </Grow>
            </Box>
        );
    }
    renderNotifications = () => {
        return GlobalState.state.data.notifications.map((props) => {
            return <NavbarNotificationsNotification {...props} />;
        });
    };
}

export default NavbarNotifications;
