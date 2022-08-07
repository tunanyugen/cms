import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
    interface Theme {
        status: {
            danger: string;
        };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        status?: {
            danger?: string;
        };
    }
}

const theme = createTheme({
    shape: {
        borderRadius: "4px",
    },
    palette: {
        mode: "light"
    }
});

export default theme;
