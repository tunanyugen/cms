import * as React from "react";
import { List, Paper } from "@mui/material";
import SidebarItem from "./SidebarItem";
import GlobalState from "../../helpers/globalState";

export interface SidebarProps {}

export interface SidebarState {}

class Sidebar extends React.Component<SidebarProps, SidebarState> {
    constructor(props: SidebarProps) {
        super(props);
    }
    render() {
        return (
            <Paper className="sidebar">
                <List>{this.renderItems()}</List>
            </Paper>
        );
    }
    renderItems = () => {
        return GlobalState.state.data.sidebarItems.map((item) => {
            return <SidebarItem key={item.id} {...item} />;
        });
    };
}

export default Sidebar;
