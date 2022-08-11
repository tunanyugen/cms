import { Box, Button, Divider } from "@mui/material";
import Component from "../../../component";
import GlobalState, { GlobalStateAttributes } from "../../../helpers/globalState";

export interface NavbarNotificationsNotificationProps {
    id: string;
    title: string;
    body: string;
    seen: boolean;
}

export interface NavbarNotificationsNotificationState {}

class NavbarNotificationsNotification extends Component<
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
                    <Box
                        className="navbar__notifications__notification__title"
                        sx={{
                            color: GlobalState.state.theme.palette.primary.main,
                            fontSize: GlobalState.state.theme.typography.h6,
                        }}
                    >
                        <span
                            dangerouslySetInnerHTML={{
                                __html: this.props.title,
                            }}
                        ></span>
                    </Box>
                    <Box
                        className="navbar__notifications__notification__body"
                        sx={{
                            fontSize:
                                GlobalState.state.theme.typography.fontSize,
                        }}
                    >
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
