import React from "react";
import {
  Card,
  Container,
  LinearProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    margin: 0,
    width: 600,
    borderRadius: 10,
    padding: 25,
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },

  bar: {
    marginTop: 20,
    width: "80%",
  },
});

function Loader() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Typography variant="h4">Uploading...</Typography>
      <LinearProgress className={classes.bar} />
    </Card>
  );
}

export default Loader;
