import Component from "../../component";
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";
import GlobalState from "../../helpers/globalState";

export interface LinkProps extends RouterLinkProps {}

export interface LinkState {}

class Link extends Component<LinkProps, LinkState> {
    constructor(props: LinkProps) {
        super(props);
    }
    render() {
        return <RouterLink onClick={this.updateHistory} {...this.props} />;
    }
    updateHistory = () => {
        let clonedHistory = GlobalState.state.history;
        clonedHistory.push(this.props.to.toString());
        GlobalState.setState({history: clonedHistory});
    }
}

export default Link;
