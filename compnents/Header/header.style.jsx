import { alpha, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";

const useStyles = makeStyles((theme) => ({
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
  },
}));

export default useStyles;
