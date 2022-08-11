import { InputAdornment, TextField } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import GlobalState, { GlobalStateAttributes } from "../../helpers/globalState";
import Component from "../../component";

export interface NavbarSearchProps {}

export interface NavbarSearchState {}

class NavbarSearch extends Component<NavbarSearchProps, NavbarSearchState> {
    constructor(props: NavbarSearchProps) {
        super(props);
        
    }
    render() {
        return (
            <TextField
                size="small"
                placeholder="Search..."
                variant="standard"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchOutlinedIcon />
                        </InputAdornment>
                    ),
                    sx: {
                        height: 28,
                        fontSize: GlobalState.state.theme.typography.fontSize,
                    },
                }}
            />
        );
    }
}

export default NavbarSearch;
