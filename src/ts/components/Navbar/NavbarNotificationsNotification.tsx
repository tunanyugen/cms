import { Box, Button, Divider } from "@mui/material";
import * as React from "react";
import GlobalState from "../../helpers/globalState";

export interface NavbarNotificationsNotificationProps {
    title: string;
    body: string;
    seen: boolean;
}

export interface NavbarNotificationsNotificationState {}

class NavbarNotificationsNotification extends React.Component<
    NavbarNotificationsNotificationProps,
    NavbarNotificationsNotificationState
> {
    constructor(props: NavbarNotificationsNotificationProps) {
        super(props);
    }
    render() {
        return (
            <>
                <Button
                    className={`navbar__notifications__notification ${
                        this.props.seen ? "seen" : ""
                    }`}
                    sx={{
                        alignItems: "flex-start",
                        textTransform: "initial",
                        color: "inherit",
                    }}
                >
                    <Box className="navbar__notifications__notification__title">
                        <span
                            dangerouslySetInnerHTML={{
                                __html: this.props.title,
                            }}
                        ></span>
                    </Box>
                    <Box className="navbar__notifications__notification__body">
                        <span
                            dangerouslySetInnerHTML={{
                                __html: this.props.body,
                            }}
                        ></span>
                    </Box>
                </Button>
                <Divider />
            </>
        );
    }
}

export default NavbarNotificationsNotification;
