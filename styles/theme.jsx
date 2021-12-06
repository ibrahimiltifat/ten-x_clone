import { grey, orange, red } from "@mui/material/colors";
import { createTheme, Theme } from "@mui/material/styles";

// default theme
const defaultTheme = createTheme();

let theme = createTheme({
  palette: {
    primary: {
      main: "#C5161A",
    },
    secondary: {
      main: grey[900],
    },
    common: {
      black: "#000",
    },
  },
  spacing: 4,
  typography: {
    htmlFontSize: 10,
    h1: {
      fontSize: "4rem",
      [defaultTheme.breakpoints.down("md")]: {
        fontSize: "2.4rem",
      },
    },
    h2: {
      fontSize: "2rem",
      [defaultTheme.breakpoints.down("md")]: {
        fontSize: "1.6rem",
      },
    },
    h3: {
      fontSize: "1.6rem",
      [defaultTheme.breakpoints.down("md")]: {
        fontSize: "1.2rem",
      },
    },
    body1: {
      fontSize: "1rem",
    },
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
        },
      },
    },
  },
  customColours: {
    grey: "#a5a5a5",
    red: "#C5161A",
    green: "#1cbf2c",
    darkGrey: "#5b5b5b",
  },
});

export default theme;
