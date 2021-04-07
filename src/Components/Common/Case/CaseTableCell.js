import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TinyLineChart from "./TinyLineChart";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0.7vw",
  },
  paper: {
    padding: theme.spacing(0.5),
    margin: "auto",
    Width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundImage: `linear-gradient(to bottom, #ffffff00 70%, red 400%)`,
  },
}));

function CaseTableCell({ data }) {
  const classes = useStyles();
  console.log("this is case table", data);
  return (
    <Grid item xs={12} className={classes.root}>
      <Paper
        className={classes.paper}
        elevation={0}
        style={{
          backgroundImage: `linear-gradient(to bottom, #ffffff00 70%, ${data.color} 200%)`,
        }}
      >
        <Typography
          style={{
            color: data.color,
            fontWeight: "bold",
            fontSize: "0.8rem",
            paddingBottom: "1.5rem",
          }}
        >
          {data.lable}
        </Typography>
        {data.delta && data.daily > 0 ? (
          <Typography
            style={{
              color: data.colorMid,
              fontSize: "0.8rem",
              fontWeight: "600",
            }}
          >
            [ + {data.daily}]
          </Typography>
        ) : (
          <div style={{ height: "20px" }}></div>
        )}
        <Typography
          style={{
            color: data.color,
            fontWeight: "bold",
            fontSize: "calc(1rem + 0.8vw)",
          }}
        >
          {data.total}
        </Typography>
        <Grid
          style={{
            width: "calc(1rem + 14vmin)",
            height: "10vh",
            margin: "2vw",
          }}
        >
          <TinyLineChart
            graph={data.graph}
            graphD={data.graphD}
            color={data.color}
          />
        </Grid>
      </Paper>
    </Grid>
  );
}
export default React.memo(CaseTableCell);
