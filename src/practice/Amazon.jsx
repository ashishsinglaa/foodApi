import { Grid } from "@material-ui/core";
import React from "react";
import SeriesCard from "./SeriesCard";
import seriesData from "../Data";

const Amazon = () => {
  return (
    <Grid item sm={4} xs={11}>
      <SeriesCard
        imageLink={seriesData[2].imageLink}
        name={seriesData[2].name}
        desc={seriesData[2].desc}
      />
    </Grid>
  );
};

export default Amazon;
