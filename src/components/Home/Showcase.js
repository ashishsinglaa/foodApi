import { Button, makeStyles } from "@material-ui/core";
import { Box } from "@mui/system";
import React, { useState } from "react";
import DisplayMeal from "./DisplayMeal";

const useStyles = makeStyles((theme) => ({
  box: {
    padding: theme.spacing(5),
  },
  buttonBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Showcase = () => {
  // state value of all tab buttons
  const [active, setActive] = useState({
    breakfast: true,
    lunch: false,
    dinner: false,
  });

  //meal Array
  const meals = ["breakfast", "lunch", "dinner"];

  // for styling
  const classes = useStyles();

  // checking which meal is currently active
  const isActive = (meal) => {
    return active[meal] ? "contained" : "outlined";
  };

  const switchTab = (meal) => {
    // copying data of state into normal variable and set all value to false
    const newState = active;
    for (let key in newState) {
      newState[key] = false;
    }
    // only change that meal to be true through which function called
    setActive({
      ...newState,
      [meal]: true,
    });
  };

  return (
    <Box component="div" className={classes.box}>
      <Box component="div" className={classes.buttonBox}>
        {meals.map((meal) => {
          return (
            <Button
              variant={isActive(meal)}
              color="primary"
              key={meal}
              onClick={() => switchTab(meal)}
            >
              {meal}
            </Button>
          );
        })}
      </Box>
      {meals.map((meal) => {
        return active[meal] && <DisplayMeal meal={meal} key={meal} />;
      })}
    </Box>
  );
};

export default Showcase;
