import DefaultData from "./DefaultData";
import InboxIcon from "@mui/icons-material/Inbox";
import { v4 as uuidv4 } from "uuid";
import { SidebarItemProps } from "../../../components/Sidebar/SidebarItem";

export default class DefaultDataSidebarItem extends DefaultData {
    getDefaultData: () => {items:SidebarItemProps[]} = () => {
        return {
            items: [
                {
                    id: uuidv4(),
                    icon: <InboxIcon />,
                    name: "Item 1",
                    children: [
                        {
                            id: uuidv4(),
                            icon: <InboxIcon />,
                            name: "Child 1",
                            children: [],
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    icon: <InboxIcon />,
                    name: "Item 2",
                    children: [],
                },
            ],
        };
    };
}
