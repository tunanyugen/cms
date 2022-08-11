import { List, Paper } from "@mui/material";
import SidebarItem from "./SidebarItem";
import GlobalState, { GlobalStateAttributes } from "../../helpers/globalState";
import Component from "../../component";

export interface SidebarProps {}

export interface SidebarState {}

class Sidebar extends Component<SidebarProps, SidebarState> {
    constructor(props: SidebarProps) {
        super(props);
        this._subscriptionIndices = GlobalState.bulkSubscribe([GlobalStateAttributes.sidebarItems], () => {
            this.forceUpdate();
        });
    }
    render() {
        return (
            <Paper className="sidebar">
                <List>{this.renderItems()}</List>
            </Paper>
        );
    }
    renderItems = () => {
        return GlobalState.state.sidebarItems.map((item) => {
            return <SidebarItem key={item.id} {...item} />;
        });
    };
}

export default Sidebar;
