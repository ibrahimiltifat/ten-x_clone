import useStyles from "./searchTab.style";
import { Grid, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { data } from "./tabData";

export default function Tab({ label }) {
  const classes = useStyles();
  const [toggleState, setToggleState] = useState(0);

  const toggletab = (index) => {
    setToggleState(index);
  };

  return (
    <Grid
      container
      item
      xs={3}
      className={classes.list}
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={2} className={classes.textContainer}>
        <SearchIcon className={classes.SearchIcon} />
      </Grid>
      {data.map((x) => (
        <Grid
          item
          xs={12}
          className={
            toggleState === data.indexOf(x)
              ? classes.textContainerclick
              : classes.textContainer
          }
          onClick={() => toggletab(data.indexOf(x))}
        >
          <Typography
            className={
              toggleState === data.indexOf(x)
                ? classes.listTextclick
                : classes.listText
            }
          >
            {x}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}
