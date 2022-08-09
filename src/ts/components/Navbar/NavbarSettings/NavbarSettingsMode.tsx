import { Button, ButtonGroup, FormControl, FormLabel } from "@mui/material";
import * as React from "react";
import GlobalState from "../../../helpers/globalState";

export interface NavbarSettingsModeProps {}

export interface NavbarSettingsModeState {}

class NavbarSettingsMode extends React.Component<NavbarSettingsModeProps, NavbarSettingsModeState> {
    constructor(props: NavbarSettingsModeProps) {
        super(props);
    }
    render() {
        return (
            <FormControl className="navbar__settings__mode">
                <FormLabel
                    component="legend"
                    sx={{
                        fontSize: GlobalState.state.theme.typography.fontSize,
                        marginBottom: GlobalState.state.theme.spacing(),
                    }}
                >
                    MODE
                </FormLabel>
                <ButtonGroup fullWidth>
                    <Button size="small" sx={{ textTransform: "initial" }}>
                        Light
                    </Button>
                    <Button size="small" sx={{ textTransform: "initial" }}>
                        Dark
                    </Button>
                </ButtonGroup>
            </FormControl>
        );
    }
}

export default NavbarSettingsMode;
