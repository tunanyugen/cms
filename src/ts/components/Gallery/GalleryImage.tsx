import { Box, IconButton, ImageListItem, ImageListItemBar, Modal, Paper, TextField } from "@mui/material";
import Component, { ComponentState } from "../../component";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import GlobalState from "../../helpers/globalState";

interface GalleryImageAttributes {
    id: string;
    name: string;
    src: string;
}
export interface GalleryImageProps extends GalleryImageAttributes {}

export interface GalleryImageState extends GalleryImageAttributes {
    modalSrc: string;
    open?: boolean;
}

class GalleryImage extends Component<GalleryImageProps, GalleryImageState> {
    constructor(props: GalleryImageProps) {
        super(props);
        this.state = {
            id: this.props.id,
            name: this.props.name,
            src: this.props.src,
            modalSrc: this.props.src,
            open: false,
        };
    }
    render() {
        return (
            <ImageListItem className="gallery__image">
                <IconButton
                    className="gallery__image__edit"
                    sx={{
                        position: "absolute",
                    }}
                    onClick={(e) => {
                        this.setState({ open: true });
                    }}
                >
                    <EditOutlinedIcon />
                </IconButton>
                <img src={this.state.src} alt={this.state.name} loading="lazy" />
                <ImageListItemBar title={this.state.name} />
                <Modal className="gallery__image__modal" open={this.state.open} onClose={this.onCloseModal}>
                    <Paper
                        className="gallery__image__modal__wrapper"
                        sx={{
                            padding: GlobalState.state.theme.spacing(),
                            gap: GlobalState.state.theme.spacing(),
                        }}
                    >
                        <TextField
                            label={GlobalState.translate("name")}
                            value={this.state.name}
                            onChange={(e) => {
                                this.setState({ name: e.target.value });
                            }}
                        />
                        <TextField
                            label={GlobalState.translate("source")}
                            value={this.state.modalSrc}
                            onChange={(e) => {
                                this.setState({ modalSrc: e.target.value });
                            }}
                        />
                    </Paper>
                </Modal>
            </ImageListItem>
        );
    }
    onCloseModal = () => {
        this.setState({ open: false, src: this.state.modalSrc });
    };
}

export default GalleryImage;
