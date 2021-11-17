import { Button, Typography, makeStyles } from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  margin: {
    marginBottom: theme.spacing(2),
  },
}));

// getting current time
const today = new Date();
const _currTime = today.toLocaleTimeString();

const GetTime = () => {
  // init hooks
  const [currTime, setCurrTime] = useState(_currTime);

  // for styling
  const classes = useStyles();

  // click handler function
  const clickHandler = () => {
    const currTime = new Date().toLocaleTimeString();
    setCurrTime(currTime);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.margin}>
        {currTime}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={clickHandler}
      >
        Get Time
      </Button>
    </div>
  );
};

export default GetTime;
