import { Fade } from "@mui/material";
import Component, { ComponentProps, ComponentState } from "../../component";

export interface FormProps extends ComponentProps {}

export interface FormState extends ComponentState {
    id: string;
}

abstract class Form<P extends FormProps, S extends FormState> extends Component<P, S> {
    render() {
        return (
            <Fade in={true} mountOnEnter={true}>
                {this.renderForm()}
            </Fade>
        );
    }
    abstract renderForm: () => JSX.Element;
}

export default Form;
