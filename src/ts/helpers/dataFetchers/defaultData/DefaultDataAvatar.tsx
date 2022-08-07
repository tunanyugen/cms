import { NavbarAvatarProps } from "../../../components/Navbar/NavbarAvatar";
import DefaultData from "./DefaultData";

export default class DefaultDataAvatar extends DefaultData {
    getDefaultData: () => {items:NavbarAvatarProps[]} = () => {
        return {
            items: [null],
        };
    };
}
