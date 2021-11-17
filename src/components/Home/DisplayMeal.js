import { Grid, makeStyles, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import apiKey from "../ApiKey";
import MealCard from "./MealCard";
import response from "./Response";

const useStyles = makeStyles((theme) => ({
  grid: {
    marginTop: theme.spacing(5),
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
}));

const DisplayMeal = ({ meal }) => {
  // state array in which response will add after getting data
  //   const [response, setResponse] = useState([]);

  const url = "https://api.spoonacular.com/recipes/complexSearch";
  const dataUrl = `${url}?query=${meal}&apiKey=${apiKey}`;

  // fetching data on component did mount
  useEffect(() => {
    // axios
    //   .get(dataUrl)
    //   .then((resp) => setResponse(resp.data.results))
    //   .catch((err) => console.log(err));
  }, [dataUrl]);

  // for styling
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.grid}>
      {response.map((data) => {
        return (
          <MealCard key={data.id} data={data} btnvisiblity={true}>
            <Typography variant="body1">Type : {meal}</Typography>
            <Typography variant="body1">Healthy : true</Typography>
          </MealCard>
        );
      })}
    </Grid>
  );
};

export default DisplayMeal;
