import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import React from "react";
import Component from "../../../component";
import GlobalState, { GlobalStateAttributes } from "../../../helpers/globalState";

export interface NavbarSettingsLanguageItemProps {
    code: string;
    name: string;
}

export interface NavbarSettingsLanguageItemState {}

class NavbarSettingsLanguageItem extends Component<NavbarSettingsLanguageItemProps, NavbarSettingsLanguageItemState> {
    constructor(props: NavbarSettingsLanguageItemProps) {
        super(props);
        
    }
    render() {
        return (
            <ListItem sx={{ padding: 0 }}>
                <ListItemButton>
                    <ListItemText
                        primary={
                            <span style={{ fontSize: GlobalState.state.theme.typography.fontSize }}>
                                {this.props.name}
                            </span>
                        }
                    />
                </ListItemButton>
            </ListItem>
        );
    }
}

export default NavbarSettingsLanguageItem;
