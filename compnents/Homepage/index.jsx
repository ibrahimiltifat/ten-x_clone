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
      <Grid container className={classes.root}>
        <Grid container item xs={5}>
          <Searchtab />
        </Grid>
        <Grid container item xs={6}>
          <Typography className={classes.text} style={{ fontSize: "3.75rem" }}>
            THE SMARTER, FASTER, BETTER way to transact commercial real estate
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
