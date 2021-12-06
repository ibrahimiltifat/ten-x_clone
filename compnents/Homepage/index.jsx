import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import useStyles from "./homePage.style";
import { Grid, Typography } from "@mui/material";
import Searchtab from "./Searchtab";
import Header from "../Header";

export default function Homepage() {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <Grid
        container
        className={classes.root}
        sx={{
          flexDirection: { xs: "row", sm: "row-reverse" },
        }}
      >
        <Grid container item xs={10} sm={6}>
          <Typography className={classes.text}>
            <span className={classes.text1}>THE SMARTER</span>,{" "}
            <span className={classes.text2}>FASTER, BETTER </span>
            way to transact commercial real estate
          </Typography>
        </Grid>
        <Grid container item xs={11} sm={5}>
          <Searchtab />
        </Grid>
      </Grid>
    </div>
  );
}
