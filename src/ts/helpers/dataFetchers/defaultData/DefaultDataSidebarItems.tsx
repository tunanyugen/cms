import DefaultData from "./DefaultData";
import InboxIcon from "@mui/icons-material/Inbox";
import { v4 as uuidv4 } from "uuid";
import { SidebarItemProps } from "../../../components/Sidebar/SidebarItem";
import GlobalState from "../../globalState";

export default class DefaultDataSidebarItem extends DefaultData {
    getDefaultData: () => {items:SidebarItemProps[]} = () => {
        return {
            items: [
                {
                    id: "1",
                    icon: <InboxIcon />,
                    name: GlobalState.translate("content"),
                    children: [
                        {
                            id: "2",
                            icon: <InboxIcon />,
                            name: GlobalState.translate("article"),
                            children: [],
                        },
                        {
                            id: "3",
                            icon: <InboxIcon />,
                            name: GlobalState.translate("gallery"),
                            children: [],
                        },
                        {
                            id: "4",
                            icon: <InboxIcon />,
                            name: GlobalState.translate("values"),
                            children: [],
                        },
                    ],
                },
                {
                    id: "5",
                    icon: <InboxIcon />,
                    name: "Item 2",
                    children: [],
                },
            ],
        };
    };
}
