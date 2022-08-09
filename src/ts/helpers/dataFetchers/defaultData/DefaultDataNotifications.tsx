import { NavbarNotificationsNotificationProps } from "../../../components/Navbar/NavbarNotificationsNotification";
import DefaultData from "./DefaultData";

export default class DefaultDataNotifications extends DefaultData {
    getDefaultData: () => {items:NavbarNotificationsNotificationProps[]} = () => {
        return {
            items: [
                {
                    id: "0",
                    title: "Empty inbox",
                    body: "You do not have any notifications",
                    seen: false,
                }
            ],
        };
    };
}
