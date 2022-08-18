import { Button, FormControl, TextField } from "@mui/material";
import GlobalState from "../../helpers/globalState";
import "react-quill/dist/quill.snow.css";
import Form, { FormState } from "./Form";

export interface ValueFormProps extends ValueFormState {}

export interface ValueFormState extends FormState {
    name: string;
    value: string;
}

class ValueForm extends Form<ValueFormProps, ValueFormState> {
    constructor(props: ValueFormProps) {
        super(props);
        this.state = {
            id: this.props.id,
            name: this.props.name,
            value: this.props.value,
        };
    }
    renderForm = () => {
        return (
            <FormControl
                className="form"
                fullWidth
                sx={{
                    padding: GlobalState.state.theme.spacing(),
                    gap: GlobalState.state.theme.spacing(),
                }}
            >
                <TextField
                    fullWidth
                    size="small"
                    name="name"
                    label={GlobalState.translate("name")}
                    value={this.state.name}
                    onChange={(e) => {
                        this.setState({ name: e.target.value });
                    }}
                />
                <TextField
                    fullWidth
                    size="small"
                    name="value"
                    label={GlobalState.translate("value")}
                    value={this.state.value}
                    onChange={(e) => {
                        this.setState({ value: e.target.value });
                    }}
                />
                <Button sx={{ marginLeft: "auto" }}>{GlobalState.translate("submit")}</Button>
            </FormControl>
        );
    };
}

export default ValueForm;
