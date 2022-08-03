import { List, Paper, useTheme } from "@mui/material";
import React from "react";
import SidebarItem, { SidebarItemProps } from "./SidebarItem";

export interface SidebarProps {
    items: SidebarItemProps[];
}
function Sidebar(props: SidebarProps) {
    const theme = useTheme();
    return (
        <Paper
            sx={{
                height: "100%",
            }}
        >
            <List>{renderItems(props.items)}</List>
        </Paper>
    );
}
function renderItems(items: SidebarItemProps[]) {
    return items.map((item) => {
        return <SidebarItem key={item.id} {...item} />;
    });
}

export default Sidebar;
