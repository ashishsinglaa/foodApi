import { Grid } from "@material-ui/core";
import React from "react";
import SeriesCard from "./SeriesCard";
import seriesData from "../Data";

const Netflix = () => {
  return (
    <Grid item sm={4} xs={11}>
      <SeriesCard
        imageLink={seriesData[0].imageLink}
        name={seriesData[0].name}
        desc={seriesData[0].desc}
      />
    </Grid>
  );
};

export default Netflix;
