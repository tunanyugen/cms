import React from "react";
import { Box, Divider, FormControl, FormLabel, List } from "@mui/material";
import GlobalState, { GlobalStateAttributes } from "../../../helpers/globalState";
import NavbarSettingsLanguageItem from "./NavbarSettingsLanguageItem";
import Component from "../../../component";

export interface NavbarSettingsLanguageProps {}

export interface NavbarSettingsLanguageState {}

class NavbarSettingsLanguage extends Component<NavbarSettingsLanguageProps, NavbarSettingsLanguageState> {
    constructor(props: NavbarSettingsLanguageProps) {
        super(props);
        this._subscriptionIndices = GlobalState.bulkSubscribe([GlobalStateAttributes.languages], () => {
            if (this._mounted){
                this.forceUpdate();
            }
        });
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
        return GlobalState.state.languages.map((language, index) => {
            return (
                <Box key={language.code}>
                    <NavbarSettingsLanguageItem {...language} />
                    {(() => {
                        return index + 1 < GlobalState.state.languages.length ? <Divider /> : null;
                    })()}
                </Box>
            );
        });
    };
}

export default NavbarSettingsLanguage;
