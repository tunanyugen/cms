import { SidebarItemProps } from "../components/Sidebar/SidebarItem";
import fetchSidebarItems from "./dataFetchers/fetchSidebarItems";
import {v4 as uuidv4} from 'uuid';

export interface GlobalStateProps {
    sidebarItems: SidebarItemProps[];
}

export default class GlobalState {
    private _state: GlobalStateProps = {
        sidebarItems: [],
    };
    public get state() {
        return { ...this._state };
    }
    private _subscriptions: { [key: string]: Function } = {};
    constructor() {
        fetchSidebarItems().then((result) => {
            let clonedState = {...this.state};
            clonedState.sidebarItems = result;
            this.setState(clonedState);
        });
    }
    setState = (
        state: GlobalStateProps,
        callback: (state: GlobalStateProps) => void = () => {}
    ) => {
        this._state = { ...state };
        Object.entries(this._subscriptions).forEach((value, index) => {
            value[1]();
        });
        callback(this.state);
    };
    subscribe = (callback: Function): string => {
        let key = uuidv4();
        this._subscriptions[key] = callback;
        return key;
    }
    unsubscribe = (key: string) => {
        delete this._subscriptions[key];
    }
}
