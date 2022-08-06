import DefaultData from "./DefaultData";

export default class DefaultDataAvatar extends DefaultData {
    getDefaultData: () => any = () => {
        return {
            items: [null],
        };
    };
}
