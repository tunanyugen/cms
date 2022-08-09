import React from "react";
import { ClickAwayListener, IconButton } from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import GlobalState from "../../../helpers/globalState";
import NavbarSettingsDrawer from "./NavbarSettingsDrawer";

export interface NavbarSettingsProps {}

export interface NavbarSettingsState {
    open: boolean;
}

class NavbarSettings extends React.Component<NavbarSettingsProps, NavbarSettingsState> {
    get open() {
        return this.state.open;
    }
    set open(value: boolean) {
        this.setState({ open: value });
    }
    constructor(props: NavbarSettingsProps) {
        super(props);
        this.state = {
            open: false,
        };
    }
    render() {
        return (
            <ClickAwayListener
                onClickAway={(e) => {
                    this.open = false;
                }}
            >
                <>
                    <IconButton
                        onClick={(e) => {
                            this.open = !this.open;
                        }}
                        sx={{
                            padding: `calc(${GlobalState.state.theme.spacing()} / 2)`,
                            borderRadius: GlobalState.state.theme.shape.borderRadius,
                        }}
                    >
                        <SettingsOutlinedIcon />
                    </IconButton>
                    <NavbarSettingsDrawer
                        open={this.state.open}
                        onClose={() => {
                            this.open = false;
                        }}
                    />
                </>
            </ClickAwayListener>
        );
    }
}

export default NavbarSettings;
