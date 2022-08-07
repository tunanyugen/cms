import { Avatar, IconButton } from "@mui/material";
import React from "react";
import GlobalState from "../../helpers/globalState";

export interface NavbarAvatarProps {}

export interface NavbarAvatarState {}

class NavbarAvatar extends React.Component<
    NavbarAvatarProps,
    NavbarAvatarState
> {
    constructor(props: NavbarAvatarProps) {
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
                <Avatar
                    sx={{ width: 24, height: 24 }}
                    alt="Avatar"
                    src={GlobalState.state.data.avatar}
                />
            </IconButton>
        );
    }
}

export default NavbarAvatar;
