import { alpha, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";
import { ThemeProvider } from "@mui/styles";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import theme from "../../styles/theme";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "white",
    borderRadius: "10px",
    height: "6rem",
    alignItems: "center",
  },
  text: {
    fontSize: "1.25rem",
    fontWeight: 400,
    marginRight: "15px",
    [theme.breakpoints.down("lg")]: {
      fontSize: "0.8rem",
      fontWeight: 500,
    },
  },
}));
export default useStyles;