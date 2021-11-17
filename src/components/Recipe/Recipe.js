import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import MealCard from "../Home/MealCard";
import { Box, Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import apiKey from "../ApiKey";
import axios from "axios";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { grey } from "@material-ui/core/colors";
import { rawData } from "./RawData";

const useStyles = makeStyles((theme) => ({
  box: {
    padding: theme.spacing(5),
  },
  grid: {
    marginLeft: theme.spacing(10),
  },
  list: {
    marginTop: theme.spacing(3),
  },
  divider: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  stepHeading: {
    display: "flex",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    alignItems: "center",
  },
  stepText: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    fontWeight: "bold",
    color: grey[600],
  },
  stepSubText: {
    marginLeft: theme.spacing(5),
  },
}));

const Recipe = () => {
  // init hook for response of api -- regarding to the recipe
  const [response, setResponse] = useState([]);
  const [title, setTitle] = useState("");

  // for testing purposes ****************
  // const data = {};
  // const children = "";

  // to get all data which is passes through other route button
  const location = useLocation();
  const { data, meal } = location.state;
  // const { data, children } = location.state;
  // console.log(location.state);

  // grabbing id from data
  const id = data?.id;

  // api cred
  const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;

  // calling api on component did mount
  useEffect(() => {
    // axios
    //   .get(url)
    //   .then((res) => {
    //     setTitle(res.data.title);
    //     setResponse(res.data.extendedIngredients);
    //     console.log(res);
    //   })
    //   .catch((err) => console.log(err));
  }, []);

  // for styling
  const classes = useStyles();

  return (
    <>
      <Box className={classes.box}>
        <Grid container>
          <MealCard data={data}>{/* {children} */}</MealCard>
          <Grid item xs={12} sm={6} md={7} className={classes.grid}>
            <Typography variant="h4" style={{ textAlign: "center" }}>
              Ingredients
            </Typography>
            <Typography variant="h6">{title}</Typography>
            <ul className={classes.list}>
              {response.map((item) => {
                return (
                  <li key={item.id}>
                    <Typography variant="subtitle1">
                      {item.originalString}
                    </Typography>
                  </li>
                );
              })}
            </ul>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <Box component="div">
          <Typography variant="h4">Directions</Typography>
          {rawData.analyzedInstructions[0].steps.map((step) => {
            return (
              <Box>
                <Box className={classes.stepHeading}>
                  <CheckCircleIcon
                    fontSize="small"
                    style={{ color: grey[600] }}
                  />
                  <Typography className={classes.stepText} variant="body1">
                    Step {step.number}
                  </Typography>
                </Box>
                <Typography variant="body1" className={classes.stepSubText}>
                  {step.step}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default Recipe;
