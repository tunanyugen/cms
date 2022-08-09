import * as React from "react";
import {
    Button,
    FormControl,
    FormLabel,
} from "@mui/material";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import GlobalState from "../../../helpers/globalState";

export interface NavbarSettingsLogoutProps {}

export interface NavbarSettingsLogoutState {}

class NavbarSettingsLogout extends React.Component<NavbarSettingsLogoutProps, NavbarSettingsLogoutState> {
    constructor(props: NavbarSettingsLogoutProps) {
        super(props);
    }
    render() {
        return (
            <FormControl
            className="navbar__settings__logout"
            >
                <FormLabel
                    component="legend"
                    sx={{
                        fontSize: GlobalState.state.theme.typography.fontSize,
                        marginBottom: GlobalState.state.theme.spacing(),
                    }}
                >
                    LOGOUT
                </FormLabel>
                <Button variant="outlined">
                    <LogoutOutlinedIcon />
                </Button>
            </FormControl>
        );
    }
}

export default NavbarSettingsLogout;
