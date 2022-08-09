import React from "react";
import { Box, Divider, FormControl, FormLabel, List } from "@mui/material";
import GlobalState from "../../../helpers/globalState";
import NavbarSettingsLanguageItem from "./NavbarSettingsLanguageItem";

export interface NavbarSettingsLanguageProps {}

export interface NavbarSettingsLanguageState {}

class NavbarSettingsLanguage extends React.Component<NavbarSettingsLanguageProps, NavbarSettingsLanguageState> {
    constructor(props: NavbarSettingsLanguageProps) {
        super(props);
    }
    render() {
        return (
            <FormControl className="navbar__settings__language">
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
                    {this.renderItems()}
                </List>
            </FormControl>
        );
    }
    renderItems = () => {
        return GlobalState.state.data.languages.map((language, index) => {
            return (
                <Box key={language.code}>
                    <NavbarSettingsLanguageItem {...language} />
                    {(() => {
                        return index + 1 < GlobalState.state.data.languages.length ? <Divider /> : null;
                    })()}
                </Box>
            );
        });
    };
}

export default NavbarSettingsLanguage;
