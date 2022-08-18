import DefaultData from "./DefaultData";
import InboxIcon from "@mui/icons-material/Inbox";
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
                            href: "/article",
                        },
                        {
                            id: "3",
                            icon: <InboxIcon />,
                            name: GlobalState.translate("gallery"),
                            children: [],
                            href: "/gallery",
                        },
                        {
                            id: "4",
                            icon: <InboxIcon />,
                            name: GlobalState.translate("value"),
                            children: [],
                            href: "/value",
                        },
                    ],
                    href: "",
                },
                {
                    id: "5",
                    icon: <InboxIcon />,
                    name: "Item 2",
                    children: [],
                    href: "",
                },
            ],
        };
    };
}
