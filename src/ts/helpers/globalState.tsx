import { SidebarItemProps } from "../components/Sidebar/SidebarItem";
import { v4 as uuidv4 } from "uuid";
import { Theme } from "@mui/material";
import theme from "../../theme";
import DataFetcher from "./dataFetchers/DataFetcher";
import DefaultDataSidebarItem from "./dataFetchers/defaultData/DefaultDataSidebarItems";
import DefaultDataAvatar from "./dataFetchers/defaultData/DefaultDataAvatar";
import Apis from "../interfaces/Apis";
import DefaultDataNotifications from "./dataFetchers/defaultData/DefaultDataNotifications";
import { NavbarSettingsLanguageItemProps } from "../components/Navbar/NavbarSettings/NavbarSettingsLanguageItem";
import { NavbarNotificationsNotificationProps } from "../components/Navbar/NavbarNotifications/NavbarNotificationsNotification";

export interface GlobalStateSubscriptionIndex {
    attribute: string;
    uuid: string;
}
export interface GlobalStateSubscription {
    [attribute: string]: {
        [uuid: string]: Function;
    };
}
export interface GlobalStateProps {
    theme: Theme;
    // config
    sidebarX: number;
    navbarY: number;
    drawerX: number;
    // data
    avatar: string;
    sidebarItems: SidebarItemProps[];
    notifications: NavbarNotificationsNotificationProps[];
    languages: NavbarSettingsLanguageItemProps[];
    translations: any;
    history: string[];
}
export enum GlobalStateAttributes {
    theme = "theme",
    sidebarX = "sidebarX",
    navbarY = "navbarY",
    drawerX = "drawerX",
    avatar = "avatar",
    sidebarItems = "sidebarItems",
    notifications = "notifications",
    languages = "languages",
    translations = "translations",
    history = "history",
}

export default class GlobalState {
    private static _defaultState: GlobalStateProps = {
        theme: theme,
        // config
        sidebarX: 200,
        navbarY: 56,
        drawerX: 200,
        // data
        avatar: "",
        sidebarItems: [],
        notifications: [],
        languages: [
            {
                code: "vi",
                name: "Tiếng Việt",
            },
            {
                code: "en",
                name: "English",
            },
        ],
        translations: {},
        history: [],
    };
    private static _state: GlobalStateProps = GlobalState._defaultState;
    public static get state() {
        return { ...GlobalState._state };
    }
    private static _subscriptions: GlobalStateSubscription = {};
    // fetches data from api then update states
    static initialize = (apis: Apis) => {
        let clonedState: Partial<GlobalStateProps> = {};
        // add current path to history array
        clonedState.history = [...GlobalState._defaultState.history];
        clonedState.history.push(window.location.pathname);
        // fetch sidebar items
        DataFetcher.fetch<SidebarItemProps[]>(apis.sidebarItems, new DefaultDataSidebarItem().getDefaultData()).then(
            (result) => {
                clonedState.sidebarItems = result.data.items;
                // fetch avatar
                DataFetcher.fetch<string>(apis.avatar, new DefaultDataAvatar().getDefaultData()).then((result) => {
                    clonedState.avatar = result.data.items[0];
                    // fetch notifications
                    DataFetcher.fetch<NavbarNotificationsNotificationProps[]>(
                        apis.notifications,
                        new DefaultDataNotifications().getDefaultData()
                    ).then((result) => {
                        clonedState.notifications = result.data.items;
                        GlobalState.setState(clonedState);
                    });
                });
            }
        );
    };
    // translates sentences fetched from state
    static translate = (sentence: string) => {
        return GlobalState.state.translations[sentence]
            ? GlobalState.state.translations[sentence]
            : sentence
                  .replace(/[-_]/giu, " ")
                  .split(" ")
                  .map((word) => {
                      return word.charAt(0).toUpperCase() + word.slice(1);
                  })
                  .join(" ");
    };
    // sets globalState states and run all subscription in attributes that are included in the new state
    static setState = (state: Partial<GlobalStateProps>, callback: (state: GlobalStateProps) => void = () => {}) => {
        let clonedState = GlobalState.state;
        // only updating attributes that exist in state parameter
        Object.entries(state).forEach(([stateAttribute, value]) => {
            // @ts-ignore
            clonedState[stateAttribute] = value;
        });
        // updating _state
        GlobalState._state = clonedState;
        // executing callbacks of attributes that exist in state parameter
        Object.entries(state).forEach(([stateAttribute, value]) => {
            if (!this._subscriptions[stateAttribute]) {
                console.warn(
                    `Attribute "${stateAttribute}" was updated but no subscription was assigned to this attribute`
                );
            } else {
                Object.entries(this._subscriptions[stateAttribute]).forEach(([callbackUuid, callback]) => {
                    this._subscriptions[stateAttribute][callbackUuid]();
                });
            }
        });
        // executing setState callback parameter
        callback(GlobalState.state);
    };
    // subscribes to level 1 attribute of state
    static subscribe = (attribute: string, callback: Function): GlobalStateSubscriptionIndex => {
        let uuid = uuidv4();
        if (!GlobalState._subscriptions[attribute]) {
            GlobalState._subscriptions[attribute] = {};
        }
        GlobalState._subscriptions[attribute][uuid] = callback;
        return { attribute, uuid };
    };
    // subscribes the same callback to multiple attributes
    static bulkSubscribe = (attributes: string[], callback: Function): GlobalStateSubscriptionIndex[] => {
        return attributes.map((attribute) => {
            return GlobalState.subscribe(attribute, callback);
        });
    };
    // unsubscribes from level 1 attribute of state
    static unsubscribe = (index: GlobalStateSubscriptionIndex) => {
        delete GlobalState._subscriptions[index.attribute][index.uuid];
    };
}
