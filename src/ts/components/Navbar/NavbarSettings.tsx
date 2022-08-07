import React from "react";
import { IconButton } from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import GlobalState from "../../helpers/globalState";

export interface NavbarSettingsProps {}

export interface NavbarSettingsState {}

class NavbarSettings extends React.Component<
    NavbarSettingsProps,
    NavbarSettingsState
> {
    constructor(props: NavbarSettingsProps) {
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
                <SettingsOutlinedIcon />
            </IconButton>
        );
    }
}

export default NavbarSettings;
