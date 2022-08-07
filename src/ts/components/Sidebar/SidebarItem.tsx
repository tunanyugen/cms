import * as React from "react";
import {
    Box,
    Collapse,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import GlobalState from "../../helpers/globalState";

export interface SidebarItemProps {
    id: string;
    icon: React.ReactElement;
    name: string;
    children: SidebarItemProps[];
}

export interface SidebarItemState {
    open: boolean;
}

class SidebarItem extends React.Component<SidebarItemProps, SidebarItemState> {
    constructor(props: SidebarItemProps) {
        super(props);
        this.state = {
            open: false,
        };
        (window as any).test = this;
    }
    render() {
        return (
            <Box>
                <ListItemButton
                    onClick={(e) => {
                        if (this.props.children.length > 0) {
                            e.preventDefault();
                            this.setState({ open: !this.state.open });
                        }
                    }}
                >
                    <ListItemIcon
                        sx={{
                            fontSize:
                                GlobalState.state.theme.typography.fontSize,
                        }}
                    >
                        {this.props.icon}
                    </ListItemIcon>
                    <ListItemText
                        primary={
                            <span
                                style={{
                                    fontSize:
                                        GlobalState.state.theme.typography
                                            .fontSize,
                                }}
                            >
                                {this.props.name}
                            </span>
                        }
                    />
                    <ExpandLessOutlinedIcon
                        sx={{
                            display:
                                this.props.children.length <= 0 ? "none" : null,
                            transform: `rotate(${open ? "180deg" : "0deg"})`,
                            transition: "0.25s",
                        }}
                    />
                </ListItemButton>
                <Collapse
                    in={this.state.open}
                    unmountOnExit
                    sx={{ paddingLeft: 2 }}
                >
                    {this.renderChildren()}
                </Collapse>
            </Box>
        );
    }
    renderChildren = () => {
        return this.props.children.map((child, index) => {
            return <SidebarItem key={child.id} {...child} />;
        });
    };
}

export default SidebarItem;
