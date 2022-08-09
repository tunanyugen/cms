import React from "react";
import { Divider, Drawer, Paper, Typography } from "@mui/material";
import GlobalState from "../../../helpers/globalState";
import NavbarSettingsMode from "./NavbarSettingsMode";
import NavbarSettingsLanguage from "./NavbarSettingsLanguage";
import NavbarSettingsLogout from "./NavbarSettingsLogout";

export interface NavbarSettingsDrawerProps {
    open: boolean;
    onClose: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
}

export interface NavbarSettingsDrawerState {}

class NavbarSettingsDrawer extends React.Component<NavbarSettingsDrawerProps, NavbarSettingsDrawerState> {
    constructor(props: NavbarSettingsDrawerProps) {
        super(props);
    }
    render() {
        return (
            <Drawer
                className="navbar__settings__drawer"
                anchor="right"
                open={this.props.open}
                onClose={this.props.onClose}
                PaperProps={{
                    sx: {
                        elevation: 0,
                        background: "none",
                    },
                }}
            >
                <Paper
                    className="navbar__settings__drawer__wrapper"
                    sx={{
                        gap: `calc(${GlobalState.state.theme.spacing()} * 2)`,
                        width: GlobalState.state.config.drawerX,
                        padding: GlobalState.state.theme.spacing(),
                    }}
                >
                    <Typography sx={{ fontSize: GlobalState.state.theme.typography.h6 }}>Settings</Typography>
                    <Divider />
                    <NavbarSettingsMode />
                    <NavbarSettingsLanguage />
                    <NavbarSettingsLogout />
                </Paper>
            </Drawer>
        );
    }
}

export default NavbarSettingsDrawer;
