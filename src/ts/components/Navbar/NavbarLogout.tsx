import * as React from "react";
import { IconButton } from "@mui/material";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

export interface NavbarLogoutProps {}

export interface NavbarLogoutState {}

class NavbarLogout extends React.Component<
    NavbarLogoutProps,
    NavbarLogoutState
> {
    constructor(props: NavbarLogoutProps) {
        super(props);
    }
    render() {
        return (
            <IconButton>
                <LogoutOutlinedIcon />
            </IconButton>
        );
    }
}

export default NavbarLogout;
