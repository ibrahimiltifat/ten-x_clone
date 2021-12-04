import useStyles from "./searchTab.style";
import {
  Button,
  Checkbox,
  Grid,
  TextField,
  Typography,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import { typography } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export default function Tab({ active, label }) {
  const classes = useStyles();
    const [onclick, setonclick] = useState(active);

  return (
    <Typography className={active ? classes.onclick : classes.listText}>
      {label}
    </Typography>
  );
}
