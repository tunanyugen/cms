import React from "react";
import { Paper } from "@mui/material";
import NavbarLogout from "./NavbarLogout";
import NavbarAvatar from "./NavbarAvatar";
import NavbarSearch from "./NavbarSearch";
import GlobalState from "../../helpers/globalState";

interface NavbarProps {}

interface NavbarState {}

class Navbar extends React.Component<NavbarProps, NavbarState> {
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
                <NavbarLogout />
            </Paper>
        );
    }
}

export default Navbar;
