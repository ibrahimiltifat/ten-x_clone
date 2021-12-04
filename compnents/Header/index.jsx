import useStyles from "./header.style";
import {
  Button,
  Checkbox,
  Grid,
  TextField,
  Typography,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
export default function Header() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} justifyContent="space-around">
      <Grid item xs={2}>
        <img src="logo.PNG" style={{ width: "100%" }} />
      </Grid>
      <Grid container item xs={5} justifyContent="center">
        <Grid item>
          <Typography className={classes.text}>Properties</Typography>
        </Grid>
        <Grid
          item
          sx={{
            display: { xs: "none", lg: "block" },
          }}
        >
          <Typography className={classes.text}>Brokers</Typography>
        </Grid>
        <Grid
          item
          sx={{
            display: { xs: "none", lg: "block" },
          }}
        >
          <Typography className={classes.text}>Sellers</Typography>
        </Grid>
        <Grid
          item
          sx={{
            display: { xs: "none", lg: "block" },
          }}
        >
          <Typography className={classes.text}>Buyers</Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.text}>Login/Sign up</Typography>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <TextField
          size="small"
          placeholder="State,City,zip,address or Id"
          className={classes.textField}
        ></TextField>
      </Grid>
      <Grid item>
        <MenuIcon
          fontSize="large"
          style={{
            color: "white",
            backgroundColor: "#CE2028",
            borderRadius: "5px",
            padding: "5px",
          }}
        />
      </Grid>
    </Grid>
  );
}
