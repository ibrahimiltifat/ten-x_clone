import { alpha, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";

const useStyles = makeStyles((theme) => ({
  list: {
    backgroundColor: "black",
    borderRadius: "10px",
    height: "27rem",
  },
  listText: {
    color: "white",
    textAlign: "center",
  },
  listTextclick: {
    color: "black",
    textAlign: "center",
  },

  textContainer: {
    height: "2rem",
  },
  textContainerclick: {
    backgroundColor: "white",
    height: "2rem",
  },
  SearchIcon: {
    color: "white",
    fontSize: "2.75rem",
  },
  searchContainer: {
    height: "29rem",
    backgroundColor: "white",
    borderRadius: "5px",
    paddingInline: "30px",
  },
  button: {
    fontSize: "1.25rem",
    color: "white",
    backgroundColor: "#CE2028",
    padding: "10px 40px",
  },
  textField: {
    backgroundColor: "#e8e8e8",
    // width: "20vw",
    "&::placeholder": {
      color: "blue",
    },
  },
}));

export default useStyles;
