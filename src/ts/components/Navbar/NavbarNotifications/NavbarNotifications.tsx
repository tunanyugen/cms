import { Avatar, Badge, Box, ClickAwayListener, Grow, IconButton, Paper } from "@mui/material";
import React from "react";
import GlobalState, { GlobalStateAttributes } from "../../../helpers/globalState";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import NavbarNotificationsNotification from "./NavbarNotificationsNotification";
import Component from "../../../component";

export interface NavbarNotificationsProps {}

export interface NavbarNotificationsState {
    open: boolean;
}

class NavbarNotifications extends Component<NavbarNotificationsProps, NavbarNotificationsState> {
    get open() {
        return this.state.open;
    }
    set open(value: boolean) {
        this.setState({ open: value });
    }
    constructor(props: NavbarNotificationsProps) {
        super(props);
        this._subscriptionIndices = GlobalState.bulkSubscribe(
            [GlobalStateAttributes.notifications],
            () => {
                this.forceUpdate();
            }
        );
        this.state = {
            open: false,
        };
    }
    render() {
        return (
            <ClickAwayListener
                onClickAway={() => {
                    this.open = false;
                }}
            >
                <Box className="navbar__notifications">
                    <IconButton
                        onClick={() => {
                            this.open = !this.open;
                        }}
                        sx={{
                            padding: `calc(${GlobalState.state.theme.spacing()} / 2)`,
                            borderRadius: GlobalState.state.theme.shape.borderRadius,
                        }}
                    >
                        <Badge badgeContent={this.getUnseenNotificationCount()} color="error">
                            <NotificationsNoneOutlinedIcon />
                        </Badge>
                    </IconButton>
                    <Grow in={this.state.open} style={{ transformOrigin: "100% 0%" }}>
                        <Paper className="navbar__notifications__wrapper">{this.renderNotifications()}</Paper>
                    </Grow>
                </Box>
            </ClickAwayListener>
        );
    }
    getUnseenNotificationCount = () => {
        let count = 0;
        GlobalState.state.notifications.forEach((notification) => {
            if (!notification.seen) {
                count++;
            }
        });
        return count;
    };
    renderNotifications = () => {
        return GlobalState.state.notifications.map((props) => {
            return <NavbarNotificationsNotification key={props.id} {...props} />;
        });
    };
}

export default NavbarNotifications;
