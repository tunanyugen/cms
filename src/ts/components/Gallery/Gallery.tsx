import { Button, ImageList, ImageListItem } from "@mui/material";
import Component, { ComponentState } from "../../component";
import GalleryImage, { GalleryImageProps } from "./GalleryImage";
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';

export interface GalleryProps extends GalleryState {}

export interface GalleryState extends ComponentState {
    images: GalleryImageProps[];
}

class Gallery extends Component<GalleryProps, GalleryState> {
    constructor(props: GalleryProps) {
        super(props);
        this.state = {
            images: this.props.images,
        };
    }
    render() {
        return (
            <ImageList className="gallery" cols={3} variant="quilted">
                {this.renderImages()}
                <ImageListItem>
                    <Button onClick={this.addImage}>
                        <AddPhotoAlternateOutlinedIcon sx={{ width: "100%", height: "100%" }} />
                    </Button>
                </ImageListItem>
            </ImageList>
        );
    }
    renderImages = () => {
        return this.state.images.map((props) => {
            return <GalleryImage {...props} />;
        });
    };
    addImage = () => {
        let clonedImages = [...this.state.images];
        clonedImages.push({
            id: new Date().getMilliseconds().toString(),
            name: "",
            src: "https://static.scientificamerican.com/sciam/cache/file/7A715AD8-449D-4B5A-ABA2C5D92D9B5A21_source.png",
        });
        this.setState({ images: clonedImages });
    };
}

export default Gallery;
