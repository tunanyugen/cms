import { Button, FormControl, TextField } from "@mui/material";
import GlobalState from "../../helpers/globalState";
import "react-quill/dist/quill.snow.css";
import Form, { FormState } from "./Form";
import Gallery from "../Gallery/Gallery";
import { GalleryImageProps } from "../Gallery/GalleryImage";

export interface GalleryFormProps extends GalleryFormState {}

export interface GalleryFormState extends FormState{
    name: string;
    images: GalleryImageProps[];
}

class GalleryForm extends Form<GalleryFormProps, GalleryFormState> {
    constructor(props: GalleryFormProps) {
        super(props);
        this.state = {
            id: this.props.id,
            name: this.props.name,
            images: this.props.images,
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
                <Gallery images={this.state.images}/>
                <Button sx={{ marginLeft: "auto" }}>{GlobalState.translate("submit")}</Button>
            </FormControl>
        );
    }
}

export default GalleryForm;
