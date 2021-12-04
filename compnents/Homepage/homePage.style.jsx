import { alpha, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#e8e8e8",
    height: "100vh",
    justifyContent: "center",
    alignContent: "center",
  },
  text: {
    fontSize: 50,
    lineHeight: 1.3,
    fontWeight: 420,
  },
}));

export default useStyles;
