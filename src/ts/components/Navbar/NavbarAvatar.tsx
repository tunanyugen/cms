import { Avatar, IconButton } from "@mui/material";
import React from "react";
import Component from "../../component";
import GlobalState, { GlobalStateAttributes } from "../../helpers/globalState";

export interface NavbarAvatarProps {}

export interface NavbarAvatarState {}

class NavbarAvatar extends Component<NavbarAvatarProps, NavbarAvatarState> {
    constructor(props: NavbarAvatarProps) {
        super(props);
        this._subscriptionIndices = GlobalState.bulkSubscribe(
            [GlobalStateAttributes.avatar],
            () => {
                this.forceUpdate();
            }
        );
    }
    render() {
        return (
            <IconButton
                sx={{
                    padding: `calc(${GlobalState.state.theme.spacing()} / 2)`,
                    borderRadius: GlobalState.state.theme.shape.borderRadius,
                }}
            >
                <Avatar sx={{ width: 24, height: 24 }} alt="Avatar" src={GlobalState.state.avatar} />
            </IconButton>
        );
    }
}

export default NavbarAvatar;
