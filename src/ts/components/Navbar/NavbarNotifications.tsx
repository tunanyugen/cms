import { Avatar, IconButton } from "@mui/material";
import React from "react";
import GlobalState from "../../helpers/globalState";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

export interface NavbarNotificationsProps {}

export interface NavbarNotificationsState {}

class NavbarNotifications extends React.Component<
    NavbarNotificationsProps,
    NavbarNotificationsState
> {
    constructor(props: NavbarNotificationsProps) {
        super(props);
    }
    render() {
        return (
            <IconButton
                sx={{
                    padding: `calc(${GlobalState.state.theme.spacing()} / 2)`,
                    borderRadius: GlobalState.state.theme.shape.borderRadius,
                }}
            >
                <NotificationsNoneOutlinedIcon />
            </IconButton>
        );
    }
}

export default NavbarNotifications;
