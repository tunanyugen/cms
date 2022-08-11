import GlobalState from "../globalState";

export default class Calculator {
    static CalculateNavbarX = () => {
        return window.innerWidth - GlobalState.state.sidebarX;
    }
}