import { SidebarItemProps } from "../../components/Sidebar/SidebarItem";
import InboxIcon from "@mui/icons-material/Inbox";
import { v4 as uuidv4 } from "uuid";

export default function fetchSidebarItems(): Promise<SidebarItemProps[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: uuidv4(),
                    icon: <InboxIcon />,
                    name: "Inbox",
                    children: [
                        {
                            id: uuidv4(),
                            icon: <InboxIcon />,
                            name: "Inbox",
                            children: [],
                        },
                    ],
                },
            ]);
        }, 500);
    });
}
