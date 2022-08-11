import { Button, ButtonGroup, FormControl, FormLabel } from "@mui/material";
import Component from "../../../component";
import GlobalState, { GlobalStateAttributes } from "../../../helpers/globalState";

export interface NavbarSettingsModeProps {}

export interface NavbarSettingsModeState {}

class NavbarSettingsMode extends Component<NavbarSettingsModeProps, NavbarSettingsModeState> {
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
