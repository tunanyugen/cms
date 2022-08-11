import { Paper } from "@mui/material";
import NavbarAvatar from "./NavbarAvatar";
import NavbarSearch from "./NavbarSearch";
import GlobalState, { GlobalStateAttributes } from "../../helpers/globalState";
import NavbarSettings from "./NavbarSettings/NavbarSettings";
import NavbarNotifications from "./NavbarNotifications/NavbarNotifications";
import Component from "../../component";

interface NavbarProps {}

interface NavbarState {}

class Navbar extends Component<NavbarProps, NavbarState> {
    constructor(props: NavbarProps) {
        super(props);
        
    }
    render() {
        return (
            <Paper
                className="navbar"
                sx={{
                    gap: GlobalState.state.theme.spacing(),
                    padding: GlobalState.state.theme.spacing(),
                }}
            >
                <NavbarSearch />
                <NavbarAvatar />
                <NavbarNotifications />
                <NavbarSettings />
            </Paper>
        );
    }
}

export default Navbar;
