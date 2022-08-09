import { SidebarItemProps } from "../components/Sidebar/SidebarItem";
import { v4 as uuidv4 } from "uuid";
import { Theme } from "@mui/material";
import theme from "../../theme";
import DataFetcher from "./dataFetchers/DataFetcher";
import DefaultDataSidebarItem from "./dataFetchers/defaultData/DefaultDataSidebarItems";
import DefaultDataAvatar from "./dataFetchers/defaultData/DefaultDataAvatar";
import Apis from "../interfaces/Apis";
import NavbarNotificationsNotification, { NavbarNotificationsNotificationProps } from "../components/Navbar/NavbarNotificationsNotification";
import DefaultDataNotifications from "./dataFetchers/defaultData/DefaultDataNotifications";

export interface GlobalStateProps {
    theme: Theme;
    config: {
        sidebarX: number;
        navbarY: number;
        drawerX: number;
    };
    data: {
        avatar: string;
        sidebarItems: SidebarItemProps[];
        notifications: NavbarNotificationsNotificationProps[]
    };
}

export default class GlobalState {
    private static _state: GlobalStateProps = {
        theme: theme,
        config: {
            sidebarX: 200,
            navbarY: 56,
            drawerX: 200,
        },
        data: {
            avatar: "",
            sidebarItems: [],
            notifications: [],
        },
    };
    public static get state() {
        return { ...GlobalState._state };
    }
    private static _subscriptions: { [key: string]: Function } = {};
    static initialize = (apis: Apis) => {
        DataFetcher.fetch<SidebarItemProps[]>(
            apis.sidebarItems,
            new DefaultDataSidebarItem().getDefaultData()
        ).then((result) => {
            let clonedState = { ...GlobalState.state };
            clonedState.data.sidebarItems = result.data.items;
            GlobalState.setState(clonedState);
        });
        DataFetcher.fetch<string>(
            apis.avatar,
            new DefaultDataAvatar().getDefaultData()
        ).then((result) => {
            let clonedState = { ...GlobalState.state };
            clonedState.data.avatar = result.data.items[0];
            GlobalState.setState(clonedState);
        });
        DataFetcher.fetch<NavbarNotificationsNotificationProps[]>(apis.notifications, new DefaultDataNotifications().getDefaultData()).then((result) => {
            let clonedState = { ...GlobalState.state };
            clonedState.data.notifications = result.data.items;
            GlobalState.setState(clonedState);
        })
    };
    static setState = (
        state: GlobalStateProps,
        callback: (state: GlobalStateProps) => void = () => {}
    ) => {
        GlobalState._state = { ...state };
        Object.entries(GlobalState._subscriptions).forEach((value, index) => {
            value[1]();
        });
        callback(GlobalState.state);
    };
    static subscribe = (callback: Function): string => {
        let key = uuidv4();
        GlobalState._subscriptions[key] = callback;
        return key;
    };
    static unsubscribe = (key: string) => {
        delete GlobalState._subscriptions[key];
    };
}
