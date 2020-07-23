import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Chart_Level from "../../Components/Chart/Chart_Level";
import Chart_Temp from "../../Components/Chart/Chart_Temp";
import Console from "../../Components/Console/Console";
import Table from "../../Components/Tables/Table";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 230,
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <Grid container spacing={2}>
          {/* Chart */}
          <Grid item xs={12} sm={4}>
            <Paper className={fixedHeightPaper}>
              <Chart_Level />
            </Paper>
          </Grid>
          {/* console */}
          <Grid item xs={12} sm={4}>
            <Paper className={fixedHeightPaper}>
              <Chart_Temp />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={fixedHeightPaper}>
              <Console />
            </Paper>
          </Grid>
          {/* Table */}
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Table />
            </Paper>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
