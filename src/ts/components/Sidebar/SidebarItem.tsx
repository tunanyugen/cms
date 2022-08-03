import {
    Box,
    Collapse,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import { ReactElement, useState } from "react";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";

export interface SidebarItemProps {
    id: string;
    icon: ReactElement;
    name: string;
    children: SidebarItemProps[];
}
function SidebarItem(props: SidebarItemProps) {
    const [open, setOpen] = useState(true);
    return (
        <Box>
            <ListItemButton
                onClick={(e) => {
                    if (props.children.length > 0) {
                        e.preventDefault();
                        setOpen(!open);
                    }
                }}
            >
                <ListItemIcon>{props.icon}</ListItemIcon>
                <ListItemText primary={props.name} />
                <ExpandLessOutlinedIcon
                    sx={{
                        display: props.children.length <= 0 ? "none" : null,
                        transform: `rotate(${open ? "180deg" : "0deg"})`,
                        transition: "0.25s",
                    }}
                />
            </ListItemButton>
            <Collapse in={open} unmountOnExit sx={{ paddingLeft: 2 }}>
                {renderChildren(props.children)}
            </Collapse>
        </Box>
    );
}
function renderChildren(children: SidebarItemProps[]) {
    return children.map((child, index) => {
        return <SidebarItem key={child.id} {...child} />;
    });
}

export default SidebarItem;
