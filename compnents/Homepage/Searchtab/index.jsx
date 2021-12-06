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
    <Grid container alignItems="center" xs={12}>
      <Tab />
      <Grid
        container
        item
        md={6}
        sm={8}
        xs={9}
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
