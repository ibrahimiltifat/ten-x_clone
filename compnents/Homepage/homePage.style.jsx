import { alpha, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import theme from "../../styles/theme";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#e8e8e8",
    height: "100vh",
    justifyContent: "center",
    alignContent: "center",
    paddingTop: "9rem",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "12rem",
    },
  },
  text: {
    color: "#black",
    fontSize: "3.75rem",
    lineHeight: 1.3,
    fontWeight: 440,
    [theme.breakpoints.down("lg")]: {
      fontSize: "2.1rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.9rem",
    },
  },
  text1: {
    color: "#164e97",
  },
  text2: {
    color: "#c4232d",
  },
}));

export default useStyles;
