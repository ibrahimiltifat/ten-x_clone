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
import Tab from "./Tab";


export default function Searchtab() {
  const classes = useStyles();
  const [onclick, setonclick] = useState(false);

  return (
    <Grid container alignItems="center">
      <Grid
        container
        item
        xs={3}
        className={classes.list}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={7} className={classes.textContainer}>
          <SearchIcon className={classes.SearchIcon} />
        </Grid>
        <Grid item xs={7} className={classes.textContainer}>
          <Typography className={classes.listText}>All</Typography>
        </Grid>
        <Grid item xs={7} className={classes.textContainer}>
          <Typography className={classes.listText}>Office</Typography>
        </Grid>
        <Grid item xs={7} className={classes.textContainer}>
          <Typography className={classes.listText}>MultiFamily</Typography>
        </Grid>
        <Grid item xs={7} className={classes.textContainer}>
          <Typography className={classes.listText}>Hotel</Typography>
        </Grid>
        <Grid item xs={7} className={classes.textContainer}>
          <Typography className={classes.listText}>Retail</Typography>
        </Grid>
        <Grid item xs={7} className={classes.textContainer}>
          <Typography className={classes.listText}>Industrial</Typography>
        </Grid>
        <Grid item xs={7} className={classes.textContainer}>
          <Typography className={classes.listText}>Other</Typography>
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={6}
        className={classes.searchContainer}
        justifyContent="space-around"
        // alignItems="center"
        direction="column"
      >
        <Grid item>
          <Typography variant="h4">Search properties</Typography>
        </Grid>
        <Grid item>
          <TextField
            size="small"
            placeholder="State,City,zip,address or Id"
            className={classes.textField}
          ></TextField>
        </Grid>
        <Grid item>
          <Typography variant="h5">Asset Type:</Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="All" />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Properties"
            />
            <FormControlLabel control={<Checkbox />} label="Notes" />
          </FormGroup>
        </Grid>
        <Grid item>
          <Button className={classes.button}>Search</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
