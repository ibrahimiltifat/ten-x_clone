import { alpha, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import theme from "../../styles/theme";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#e8e8e8",
    height: "100vh",
    justifyContent: "center",
    alignContent: "center",
  },
  text: {
    fontSize: "3.75rem",
    lineHeight: 1.3,
    fontWeight: 440,
    [theme.breakpoints.down("lg")]: {
      fontSize: "2.1rem",
    },
  },
}));

export default useStyles;
