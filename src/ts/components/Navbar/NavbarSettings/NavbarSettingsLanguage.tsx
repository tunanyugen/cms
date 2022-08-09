import React from "react";
import {
    Divider,
    FormControl,
    FormLabel,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import GlobalState from "../../../helpers/globalState";

export interface NavbarSettingsLanguageProps {}

export interface NavbarSettingsLanguageState {}

class NavbarSettingsLanguage extends React.Component<NavbarSettingsLanguageProps, NavbarSettingsLanguageState> {
    constructor(props: NavbarSettingsLanguageProps) {
        super(props);
    }
    render() {
        return (
            <FormControl
                className="navbar__settings__language"
            >
                <FormLabel
                    component="legend"
                    sx={{
                        fontSize: GlobalState.state.theme.typography.fontSize,
                        marginBottom: GlobalState.state.theme.spacing(),
                    }}
                >
                    LANGUAGE
                </FormLabel>
                <List
                    sx={{
                        padding: 0,
                    }}
                >
                    <ListItem sx={{ padding: 0 }}>
                        <ListItemButton>
                            <ListItemText
                                primary={
                                    <span style={{ fontSize: GlobalState.state.theme.typography.fontSize }}>
                                        Tiếng Việt
                                    </span>
                                }
                            />
                        </ListItemButton>
                    </ListItem>
                    <Divider/>
                    <ListItem sx={{ padding: 0 }}>
                        <ListItemButton>
                            <ListItemText
                                sx={{ fontSize: GlobalState.state.theme.typography.fontSize }}
                                primary={
                                    <span style={{ fontSize: GlobalState.state.theme.typography.fontSize }}>
                                        English
                                    </span>
                                }
                            />
                        </ListItemButton>
                    </ListItem>
                </List>
            </FormControl>
        );
    }
}

export default NavbarSettingsLanguage;
